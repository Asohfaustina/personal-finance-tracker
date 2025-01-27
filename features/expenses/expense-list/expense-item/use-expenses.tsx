import getExpenses from "@/services/expenses/get-expenses";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { useQuery } from "react-query";

export default function useExpenses() {
	const { user } = useAppSelector((state) => state.account);
	const { expenses } = useAppSelector((state) => state.expenses);
	const { expense } = useActions();
	const [page, setPage] = React.useState(1);
	const userId = user._id;

const response = useQuery(["expenses", userId], () => getExpenses({ createdBy: userId }), {
	onSuccess(data) {
		expense.addExpense(data.docs);
	},
});
	return {
		...response,
		hasMore: response.data?.hasNextPage ?? false,
		expenses,
		setPage,
	};
}

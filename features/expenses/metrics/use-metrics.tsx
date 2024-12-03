import getExpenseMetrics from "@/services/expenses/get-metrics";
import { useAppSelector } from "@/store/hooks";
import { useQuery } from "react-query";
import * as React from "react";

export default function useMetrics() {
	const { user } = useAppSelector((state) => state.account);
	const date = new Date();
	const [month, setMonth] = React.useState(
		new Date(date.getFullYear(), date.getMonth(), 1).toISOString()
	);

	const response = useQuery(["expense-metrics"], () =>
		getExpenseMetrics({ userId: user._id, month })
	);

	return {
		...response,
		month,
		setMonth,
	};
}

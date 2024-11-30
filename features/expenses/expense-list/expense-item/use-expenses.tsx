import getExpenses from "@/services/expenses/get-expenses";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { useQuery } from "react-query";

export default function useExpenses() {
    const { user } = useAppSelector((state) => state.account);
    const [page, setPage] = React.useState(1)
	const userId = user._id;
	const response = useQuery(["expenses", userId], () => getExpenses({ userId, page }));
	return {
		...response,
        hasMore: response.data?.hasNextPage ?? false,
        setPage,
	};
}

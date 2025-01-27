import getSavingsHistory from "@/services/savings/get-savings-history";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useQuery } from "react-query";

export default function useHistory() {
	const { history } = useAppSelector((state) => state.savings);
	const { savings } = useActions();
	const [page, setPage] = React.useState(1);
	const { id } = useLocalSearchParams<{ id: string }>();
	const savingsId = id;

	const response = useQuery(
		["savings-history", savingsId],

		() => getSavingsHistory({ savingsId }),
		{
			onSuccess(data) {
				savings.addHistory({ savingsId, data: data.docs });
			},
		}
	);
	return {
		...response,
		hasMore: response.data?.hasNextPage ?? false,
		history: history[id]??[],
		setPage,
	};
}

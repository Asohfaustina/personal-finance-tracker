import getSavingsHistory from "@/services/savings/get-savings-history";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { useQuery } from "react-query";

export default function useHistory() {
	const { details, history } = useAppSelector((state) => state.savings);
	const { savings } = useActions();
	const [page, setPage] = React.useState(1);
	const savingsId = details?._id ?? "";

	const response = useQuery(
		["savings-history", savingsId],

		() => getSavingsHistory({ savingsId, page }),
		{
			onSuccess(data) {
				savings.addHistory(data.docs);
			},
		}
	);
	return {
		...response,
		hasMore: response.data?.hasNextPage ?? false,
		history,
		setPage,
	};
}

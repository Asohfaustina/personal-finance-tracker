import { variables } from "@/constants";
import axios from "@/lib/axios";
import { PaginatedResponse, PaginationQuery } from "@/global.types";
import buildQueryString from "@/lib/build-query-string";
import { SavingsHistory } from "@/types/savings";
import { savingsHistory } from "@/constants/data/savings";

type Query = Partial<PaginationQuery> & {
	savingsId: string;
};

export async function production({
	savingsId,
	...query
}: Query): Promise<PaginatedResponse<SavingsHistory>> {
	const query_list = buildQueryString(query);
	const response = await axios.get(`/savings/${savingsId}/history?${query_list}`);
	return response.data;
}

export async function development(): Promise<PaginatedResponse<SavingsHistory>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				docs: savingsHistory,
				totalDocs: savingsHistory.length,
				limit: 1,
				page: 1,
				totalPages: 1,
				hasNextPage: false,
				nextPage: null,
				hasPrevPage: false,
				prevPage: null,
				pagingCounter: 1,
			});
		}, 2000);
	});
}

export default async function getSavingsHistory(
	query: Query
): Promise<PaginatedResponse<SavingsHistory>> {
	if (variables.NODE_ENV === "production") return production(query);
	return development();
}

import { variables } from "@/constants";
import axios from "@/lib/axios";
import { PaginatedResponse, PaginationQuery } from "@/global.types";
import { Savings } from "@/types/savings";
import { savings } from "@/constants/data/savings";
import buildQueryString from "@/lib/build-query-string";

type Query = Partial<PaginationQuery> & {
	userId: string;
};

export async function production({ userId, ...query }: Query): Promise<PaginatedResponse<Savings>> {
	const query_list = buildQueryString(query);
	const response = await axios.get(`/savings?userId=${userId}&${query_list}`);
	return response.data;
}

export async function development(): Promise<PaginatedResponse<Savings>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				docs: savings,
				totalDocs: savings.length,
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

export default async function getSavings(query: Query): Promise<PaginatedResponse<Savings>> {
	if (variables.NODE_ENV === "production") return production(query);
	return development();
}

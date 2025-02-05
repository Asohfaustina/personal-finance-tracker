import { variables } from "@/constants";
import axios from "@/lib/axios";
import { PaginatedResponse, PaginationQuery } from "@/global.types";
import buildQueryString from "@/lib/build-query-string";
import { Expense } from "@/types/expense";
import { expenses } from "@/constants/data/expenses";

type Query = Partial<PaginationQuery> & {
	createdBy: string;
	category?: string;
};

export async function production({
	createdBy,
	...query
}: Query): Promise<PaginatedResponse<Expense>> {
	const query_list = buildQueryString(query);
	const response = await axios.get(`/v1/expenses?createdBy=${createdBy}&${query_list}`);
	console.log(response.data);
	return response.data;
}

export async function development(): Promise<PaginatedResponse<Expense>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				docs: expenses,
				totalDocs: expenses.length,
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

export default async function getExpenses(query: Query): Promise<PaginatedResponse<Expense>> {
	if (variables.SERVICE_ENV === "production") return production(query);
	return development();
}

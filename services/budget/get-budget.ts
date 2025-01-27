import { variables } from "@/constants";
import { budgets } from "@/constants/data/budgets";
import { PaginatedResponse } from "@/global.types";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type Query = {
	userId: string;
};

export async function production({ userId }: Query): Promise<PaginatedResponse<Budget>> {
	const response = await axios.get(`/v1/budgets?userId=${userId}`);
	return response.data;
}

export async function development(): Promise<PaginatedResponse<Budget>> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				docs: budgets,
				totalDocs: budgets.length,
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

export default async function getBudget(query: Query): Promise<PaginatedResponse<Budget>> {
	if (variables.SERVICE_ENV === "production") return production(query);
	return development();
}

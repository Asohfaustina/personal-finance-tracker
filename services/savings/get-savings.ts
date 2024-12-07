import { variables } from "@/constants";
import axios from "@/lib/axios";
import {  PaginationQuery } from "@/global.types";
import { Savings } from "@/types/savings";
import { savings } from "@/constants/data/savings";
import buildQueryString from "@/lib/build-query-string";

type Query = Partial<PaginationQuery> & {
	userId: string;
};

export async function production({ userId, ...query }: Query): Promise<Savings[]> {
	const query_list = buildQueryString(query);
	const response = await axios.get(`/savings?userId=${userId}&${query_list}`);
	return response.data;
}

export async function development(): Promise<Savings[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(savings);
		}, 2000);
	});
}

export default async function getSavings(query: Query): Promise<Savings[]> {
	if (variables.NODE_ENV === "production") return production(query);
	return development();
}

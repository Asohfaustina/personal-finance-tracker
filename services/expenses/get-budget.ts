import { variables } from "@/constants";
import { budgets } from "@/constants/data/budgets";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type Query = {
	userId: string;
};

export async function production({ userId }: Query): Promise<Budget> {
	const response = await axios.get(`/expenses/budget?userId=${userId}`);
	return response.data;
}

export async function development(): Promise<Budget> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(budgets[0]);
		}, 2000);
	});
}

export default async function getBudget(query: Query): Promise<Budget> {
	if (variables.NODE_ENV === "production") return production(query);
	return development();
}

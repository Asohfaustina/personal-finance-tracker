import { variables } from "@/constants";
import axios from "@/lib/axios";
import { ExpenseType } from "@/types/expense";

type Query = {
	userId: string;
	month: string;
};

type ReturnType = Record<ExpenseType, number>;

export async function production({ userId, month }: Query): Promise<ReturnType> {
	const response = await axios.get(`/v1/expenses/${userId}/metrics?month=${month}`);
	return response.data;
}

export async function development(): Promise<ReturnType> {
	const generate = () => Math.floor(Math.random() * 999);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				education: generate(),
				food: generate(),
				rent: generate(),
				shopping: generate(),
				utilities: generate(),
				others: generate(),
			});
		}, 2000);
	});
}

export default async function getExpenseMetrics(query: Query): Promise<ReturnType> {
	if (variables.SERVICE_ENV === "production") return production(query);
	return development();
}

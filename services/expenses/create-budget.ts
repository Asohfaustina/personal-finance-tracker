import { variables } from "@/constants";
import { budgets } from "@/constants/data/budgets";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type Payload = {
	userId: string;
	budget: number;
	currency: string;
	duration: string;
};

export async function production(payload: Payload): Promise<Budget> {
	const response = await axios.post(`/expenses/budget`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<Budget> {
	const date = new Date();
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				_id: Math.floor(Math.random() * 999999).toString(),
				...payload,
				currentExpense: 0,
				currency: "NGN",
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
		}, 2000);
	});
}

export default async function createBudget(payload: Payload): Promise<Budget> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

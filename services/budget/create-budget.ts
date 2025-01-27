import { variables } from "@/constants";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type Payload = {
	userId: string;
	budget: number;
	currency: string;
	duration: string;
};

export async function production(payload: Payload): Promise<Budget> {
	const response = await axios.post(`/v1/budgets`, payload);
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
				createdAt: date.toISOString(),
				updatedAt: date.toISOString(),
			});
		}, 2000);
	});
}

export default async function createBudget(payload: Payload): Promise<Budget> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development(payload);
}

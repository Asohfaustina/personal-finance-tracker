import { variables } from "@/constants";
import axios from "@/lib/axios";
import { Expense, ExpenseType } from "@/types/expense";

type Payload = {
	category: ExpenseType;
	comments?: string;
	createdBy: string;
	amount: number;
	currency: string;
};

export async function production(payload: Payload): Promise<Expense> {
	const response = await axios.post(`/v1/expenses`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<Expense> {
	const date = new Date();
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				_id: Math.floor(Math.random() * 999999).toString(),
				...payload,
				createdAt: date.toISOString(),
				updatedAt: date.toISOString(),
			});
		}, 2000);
	});
}

export default async function createExpense(payload: Payload): Promise<Expense> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development(payload);
}

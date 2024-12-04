import { variables } from "@/constants";
import axios from "@/lib/axios";
import { Expense } from "@/types/expense";
import { expenses } from "@/constants/data/expenses";

export async function production(id: string): Promise<Expense> {
	const response = await axios.get(`/expenses/${id}`);
	return response.data;
}

export async function development(id: string): Promise<Expense> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = expenses.find((item) => item._id == id);
			if (find) return resolve(find);
			return reject("item not found");
		}, 2000);
	});
}

export default async function findExpense(id: string): Promise<Expense> {
	if (variables.NODE_ENV === "production") return production(id);
	return development(id);
}

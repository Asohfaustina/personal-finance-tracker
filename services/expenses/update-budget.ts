import { variables } from "@/constants";
import { budgets } from "@/constants/data/budgets";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type payload = {
	id: string;
	budget: number;
	duration: string;
};

export async function production({ id, ...payload }: payload): Promise<Budget> {
	const response = await axios.patch(`/expenses/budget/${id}`, payload);
	return response.data;
}

export async function development(payload: payload): Promise<Budget> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = budgets.find((item) => item._id === payload.id);
			if (find) return resolve({ ...find, budget: payload.budget, duration: payload.duration });
			return reject("Item not found")
		}, 2000);
	});
}

export default async function updateBudget(payload: payload): Promise<Budget> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

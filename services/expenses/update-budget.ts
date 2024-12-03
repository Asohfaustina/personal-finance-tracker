import { variables } from "@/constants";
import { budgets } from "@/constants/data/budgets";
import axios from "@/lib/axios";
import { Budget } from "@/types/budget";

type Query = {
	id: string;
	budget: number;
	duration: string;
};

export async function production({ id, ...payload }: Query): Promise<Budget> {
	const response = await axios.patch(`/expenses/budget/${id}`, payload);
	return response.data;
}

export async function development(query: Query): Promise<Budget> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = budgets.find((item) => item._id === query.id);
			if (find) return resolve({ ...find, budget: query.budget, duration: query.duration });
			return reject("Item not found")
		}, 2000);
	});
}

export default async function updateBudget(query: Query): Promise<Budget> {
	if (variables.NODE_ENV === "production") return production(query);
	return development(query);
}

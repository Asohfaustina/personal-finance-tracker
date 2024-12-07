import { variables } from "@/constants";
import axios from "@/lib/axios";
import { savings } from "@/constants/data/savings";
import { Savings } from "@/types/savings";

export async function production(id: string): Promise<Savings> {
	const response = await axios.get(`/savings/${id}`);
	return response.data;
}

export async function development(id: string): Promise<Savings> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = savings.find((item) => item._id == id);

			if (find) return resolve(find);
			return reject("item not found");
		}, 2000);
	});
}

export default async function findSavings(id: string): Promise<Savings> {
	if (variables.NODE_ENV === "production") return production(id);
	return development(id);
}

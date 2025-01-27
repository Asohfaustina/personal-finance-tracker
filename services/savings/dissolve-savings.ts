import { variables } from "@/constants";
import axios from "@/lib/axios";
import { savings } from "@/constants/data/savings";

export async function production(id: string): Promise<void> {
	const response = await axios.delete(`/v1/savings/${id}/dissolve`);
	return response.data;
}

export async function development(id: string): Promise<void> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = savings.find((item) => item._id == id);

			if (find) return resolve();
			return reject("item not found");
		}, 2000);
	});
}

export default async function dissolveSavings(id: string): Promise<void> {
	if (variables.SERVICE_ENV === "production") return production(id);
	return development(id);
}

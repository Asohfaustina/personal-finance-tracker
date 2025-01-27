import { variables } from "@/constants";
import { savings } from "@/constants/data/savings";
import axios from "@/lib/axios";
import { Savings } from "@/types/savings";

type Payload = {
	id: string;
	duration?: string;
	title?: string;
	targetAmount?: number;
	comments?: string | undefined;
};

export async function production({ id, ...payload }: Payload): Promise<Savings> {
	const response = await axios.patch(`/v1/savings/${id}`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<Savings> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = savings.find((item) => item._id === payload.id);
			if (find) return resolve({ ...find, ...payload });
			return reject("Item not found");
		}, 2000);
	});
}

export default async function updateSavings(payload: Payload): Promise<Savings> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development(payload);
}

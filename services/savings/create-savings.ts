import { variables } from "@/constants";
import axios from "@/lib/axios";
import { generateDigits } from "@/lib/generate-digits";
import { Savings } from "@/types/savings";

type Payload = {
	title: string;
	comments?: string;
	createdBy: string;
	targetAmount: number;
	currency: string;
	duration: string;
};

export async function production(payload: Payload): Promise<Savings> {
	const response = await axios.post(`/v1/savings`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<Savings> {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve({
				_id: generateDigits(99999999).toString(),
				...payload,
				amount: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
		}, 2000);
	});
}

export default async function createSavings(payload: Payload): Promise<Savings> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development(payload);
}

import { variables } from "@/constants";
import { savings } from "@/constants/data/savings";
import axios from "@/lib/axios";
import { generateDigits } from "@/lib/generate-digits";
import { SavingsHistory } from "@/types/savings";

type Payload = {
	savingsId: string;
	amount: number;
};

export async function production({ savingsId, ...payload }: Payload): Promise<SavingsHistory> {
	const response = await axios.post(`/savings/${savingsId}/history`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<SavingsHistory> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = savings.find((item) => item._id === payload.savingsId);

			if (find) {
				// const newBalance = find.amount +
				return resolve({
					_id: generateDigits(99999999).toString(),
					savingsId: payload.savingsId,
					amount: payload.amount,
					currency: "NGN",
					amountBeforePayment: find.amount,
					amountAfterPayment: find.amount + payload.amount,
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				});
			}
			return reject("Item not found");
		}, 2000);
	});
}

export default async function addSavings(payload: Payload): Promise<SavingsHistory> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

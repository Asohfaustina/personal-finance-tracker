import { variables } from "@/constants";
import axios from "@/lib/axios";

type Payload = {
	email: string;
	oldPassword: string;
	newPassword: string;
};

export async function production(payload: Payload): Promise<void> {
	const response = await axios.patch(`/v1/auth/reset`, payload);
	return response.data;
}

export async function development(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function resetPassword(payload: Payload): Promise<void> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development();
}

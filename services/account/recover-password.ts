import { variables } from "@/constants";
import axios from "@/lib/axios";

type Payload = {
	newPassword: string;
	email: string;
	otp: string;
};

export async function production(payload: Payload): Promise<void> {
	console.log("payload", payload);
	const response = await axios.patch(`/v1/auth/recover`, payload);
	return response.data;
}

export async function development(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function recoverPassword(payload: Payload): Promise<void> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development();
}

import { variables } from "@/constants";
import axios from "@/lib/axios";

type Payload = {
	email: string;
};

export async function production(payload: Payload): Promise<void> {
	const response = await axios.post(`/v1/auth/otp/email?email=${payload.email}`);
	return response.data;
}

export async function development(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function sendEmailVerificationOtp(payload: Payload): Promise<void> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development();
}

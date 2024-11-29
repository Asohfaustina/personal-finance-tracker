import { variables } from "@/constants";
import axios from "@/lib/axios";

type Payload = {
	email: string;
};

export async function production(payload: Payload): Promise<void> {
	const response = await axios.post(`/auth/otp?email=${payload.email}`);
	return response.data;
}

export async function development(payload: Payload): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function sendOtp(payload: Payload): Promise<void> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

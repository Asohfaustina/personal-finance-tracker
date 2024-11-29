import { variables } from "@/constants";
import axios from "@/lib/axios";
import buildQueryString from "@/lib/build-query-string";

type Payload = {
	otp: string;
	email: string;
};

export async function production(payload: Payload): Promise<void> {
	const query_string = buildQueryString(payload);
	const response = await axios.post(`/auth/otp?${query_string}`);
	return response.data;
}

export async function development(payload: Payload): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve();
		}, 2000);
	});
}

export default async function verifyAccount(payload: Payload): Promise<void> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}
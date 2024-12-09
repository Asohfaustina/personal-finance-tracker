import { variables } from "@/constants";
import axios from "@/lib/axios";

export async function production(): Promise<void> {
	const response = await axios.post("/auth/logout/");
	return response.data;
}

export async function development(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function logoutAccount(): Promise<void> {
	if (variables.NODE_ENV === "production") return production();
	return development();
}

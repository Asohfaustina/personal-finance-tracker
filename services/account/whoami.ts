import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

export async function production(): Promise<User> {
	const response = await axios.get(`/v1/auth/whoami/`);
	return response.data;
}

export async function development(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(users[0]);
		}, 2000);
	});
}

export default async function whoami(): Promise<User> {
	if (variables.SERVICE_ENV === "production") return production();
	return development();
}

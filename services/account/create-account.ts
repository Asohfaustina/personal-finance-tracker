import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type Payload = {
	email: string;
	name: string;
	password: string;
};

export async function production(payload: Payload): Promise<User> {
	const response = await axios.post(`/v1/auth/register/`, payload);
	return response.data;
}

export async function development(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(users[0]);
		}, 2000);
	});
}

export default async function createAccount(payload: Payload): Promise<User> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development();
}

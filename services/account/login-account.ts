import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type Payload = {
	email: string;
	password: string;
};

export async function production(payload: Payload): Promise<User> {
	const response = await axios.post(`/auth/login/`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(users[0]);
		}, 2000);
	});
}

export default async function loginAccount(payload: Payload): Promise<User> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

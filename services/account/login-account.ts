import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type Payload = {
	email: string;
	password: string;
};

type LoginReturn = {
	key: string;
	refresh: string;
	user: User;
	exp: number;
};

export async function production(payload: Payload): Promise<LoginReturn> {
	const response = await axios.post("/auth/login/", payload);
	const { key, refresh, user } = response.data;
	const account = await axios.get(`/users/${user._id}/`, {
		headers: {
			Authorization: `Bearer ${key}`,
		},
	});
	return {
		key,
		refresh,
		exp: user.exp,
		user: account.data,
	};
}

export async function development(payload: Payload): Promise<LoginReturn> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				key: "123456789",
				refresh: "123456790",
				exp: 50000,
				user: users[0],
			});
		}, 2000);
	});
}

export default async function loginAccount(payload: Payload): Promise<LoginReturn> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

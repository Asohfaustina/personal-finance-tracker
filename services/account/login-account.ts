import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type Payload = {
	email: string;
	password: string;
};

type LoginReturn = {
	token: string;
	refresh: string;
	user: User;
};

export async function production(payload: Payload): Promise<LoginReturn> {
	const response = await axios.post("/v1/auth/login/", payload);

	return response.data;
}

export async function development(payload: Payload): Promise<LoginReturn> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token: "123456789",
				refresh: "123456790",
				user: users[0],
			});
		}, 2000);
	});
}

export default async function loginAccount(payload: Payload): Promise<LoginReturn> {
	if (variables.SERVICE_ENV === "production") return production(payload);
	return development(payload);
}

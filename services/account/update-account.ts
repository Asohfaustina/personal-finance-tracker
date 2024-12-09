import { type User } from "@/types/user";
import { variables } from "@/constants";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type Payload = Partial<Omit<User, "_id" | "email">> & {
	userId: string;
};

export async function production({ userId, ...payload }: Payload): Promise<User> {
	const response = await axios.patch(`/users/${userId}`, payload);
	return response.data;
}

export async function development(payload: Payload): Promise<User> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const find = users.find((item) => item._id === payload.userId);
			if (find) return resolve({ ...find, ...payload });
			return reject("user not found");
		}, 2000);
	});
}

export default async function updateAccount(payload: Payload): Promise<User> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development(payload);
}

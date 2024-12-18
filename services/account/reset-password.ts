import { variables } from "@/constants";
import axios from "@/lib/axios";

type Payload = {
	user_id: string;
	oldPassword: string;
	newPassword: string;
};

export async function production({ user_id, ...payload }: Payload): Promise<void> {
	const response = await axios.patch(`/auth/reset`, payload);
	return response.data;
}

export async function development(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export default async function resetPassword(payload: Payload): Promise<void> {
	if (variables.NODE_ENV === "production") return production(payload);
	return development();
}

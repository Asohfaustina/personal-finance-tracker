import { assets, variables } from "@/constants";
import { type User } from "@/types/user";
import { users } from "@/constants/data/users";
import axios from "@/lib/axios";

type UpdateAvatarParams = {
	userId: string;
	imgData: string;
	imgSize: number;
	imgMimetype: string;
};

export async function production({ userId, ...data }: UpdateAvatarParams): Promise<User> {
	const response = await axios.put(`/users/${userId}/avatar/`, data);
	return response.data;
}

export async function development(): Promise<User> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				...users[0],
				avatar: assets.userIcon,
			});
		}, 2000);
	});
}

export default async function uploadAvatar(data: UpdateAvatarParams): Promise<User> {
	if (variables.NODE_ENV === "production") return production(data);
	else return development();
}

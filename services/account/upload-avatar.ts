import {  variables } from "@/constants";


import axios from "@/lib/axios";
import { Uploads } from "@/types/uploads";

type UpdateAvatarParams = {
	userId: string;
	fileData: string;
	fileSize: number;
	fileMimetype: string;
};


type Response = Uploads
export async function production({ userId, ...data }: UpdateAvatarParams): Promise<Response> {
	const response = await axios.post(`/v1/users/${userId}/avatar/`, data);
	return response.data;
}

export async function development(): Promise<Response> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				_id: "",
    name: "",
    url: "",
    mimetype: "",
    size: "",
    createdAt: "",
    updatedAt: "",
			});
		}, 2000);
	});
}

export default async function uploadAvatar(data: UpdateAvatarParams): Promise<Response> {
	if (variables.SERVICE_ENV === "production") return production(data);
	else return development();
}

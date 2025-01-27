import { Uploads } from "./uploads";

export type User = {
	_id: string;
	name: string;
	email: string;
	avatar: Uploads | null;
	isActive: boolean;
	isEmailVerified: boolean;
	createdAt: string;
	updatedAt: string;
};

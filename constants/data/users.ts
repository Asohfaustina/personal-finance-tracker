import { User } from "@/types/user";
import { assets } from "..";

export const users: User[] = [
	{
		_id: "664ddd5a85ca21865ff74a18",
		name: "john doe",
		email: "john@gmail.com",
		avatar: assets.userIcon,
		isActive: false,
		isEmailVerified: false,
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
	{
		_id: "664ddd5a85ca21865ff74a19",
		name: "jane doe",
		email: "jane@gmail.com",
		avatar: assets.userIcon,
		isActive: false,
		isEmailVerified: false,
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
];

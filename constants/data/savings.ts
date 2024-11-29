import { Savings } from "@/types/savings";
import { users } from "./users";

export const savings: Savings[] = [
	{
		_id: "664ddd5a85ca21865ff74a18",
		title: "school savings",
		comments: "savings for school",
		createdBy: users[0],
		amount: 100,
		targetAmount: 500,
		currency: "NGN",
		duration: "2024-05-12T10:00:00Z",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
	{
		_id: "664ddd5a85ca21865ff74a19",
		title: "house savings",
		comments: "savings for house",
		createdBy: users[0],
		amount: 100,
		targetAmount: 500,
		currency: "NGN",
		duration: "2024-05-12T10:00:00Z",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
];

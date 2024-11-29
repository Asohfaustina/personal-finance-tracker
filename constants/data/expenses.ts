import { Expense } from "@/types/expense";
import { users } from "./users";

export const expenses: Expense[] = [
	{
		_id: "664ddd5a85ca21865ff74a18",
		category: "shoping",
		comments: "made some shoping",
		createdBy: users[0],
		amount: 100,
		currency: "NGN",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
	{
		_id: "664ddd5a85ca21865ff74a19",
		category: "food",
		comments: "got some food",
		createdBy: users[0],
		amount: 200,
		currency: "NGN",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
];

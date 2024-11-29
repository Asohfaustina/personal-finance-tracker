import { Budget } from "@/types/budget";
import { users } from "./users";

export const budgets: Budget[] = [
	{
		_id: "664ddd5a85ca21865ff74a18",
		userId: users[0]._id,
		currentExpense: 50,
		budget: 500,
		currency: "NGN",
		duration: "2024-05-12T10:00:00Z",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},

	{
		_id: "664ddd5a85ca21865ff74a11",
		userId: users[0]._id,
		currentExpense: 50,
		budget: 500,
		currency: "NGN",
		duration: "2024-05-12T10:00:00Z",
		createdAt: "2024-05-12T10:00:00Z",
		updatedAt: "2024-05-12T10:00:00Z",
	},
];

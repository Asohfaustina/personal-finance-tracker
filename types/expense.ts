import { User } from "./user";

export type ExpenseType = "rent" | "food" | "shopping" | "utilities" | "education" | "others";

export type Expense = {
	_id: string;
	category: ExpenseType;
	comments: string | undefined;
	createdBy: User;
	amount: number;
	currency: string;
	createdAt: string;
	updatedAt: string;
};

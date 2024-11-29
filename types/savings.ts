import { User } from "./user";

export type Savings = {
	_id: string;
	title: string;
	comments: string | undefined;
	createdBy: User;
	amount: number;
	targetAmount: number;
	currency: string;
	duration: string;
	createdAt: string;
	updatedAt: string;
};

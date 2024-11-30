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

export type SavingsHistory = {
	_id: string;
	savings_id: string;
	amount: string;
	currency: string;
	amountBeforePayment: number;
	amountAfterPayment: number;
	createdAt: string;
	updatedAt: string;
};
import { User } from "./user";

export type Savings = {
	_id: string;
	title: string;
	comments?: string 
	createdBy: string;
	amount: number;
	targetAmount: number;
	currency: string;
	duration: string;
	createdAt: string;
	updatedAt: string;
};

export type SavingsHistory = {
	_id: string;
	savingsId: string;
	amount: number;
	currency: string;
	amountBeforePayment: number;
	amountAfterPayment: number;
	createdAt: string;
	updatedAt: string;
};
import { Savings, SavingsHistory } from "@/types/savings";
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

export const savingsHistory: SavingsHistory[] = [
	{
		_id: "1",
		savingsId: savings[0]._id,
		amount: 500,
		currency: "NGN",
		amountBeforePayment: savings[0].amount,
		amountAfterPayment: savings[0].amount + 500,
		createdAt: "2024-12-12T10:00:00Z",
		updatedAt: "2024-12-12T10:00:00Z",
	},
	{
		_id: "2",
		savingsId: savings[0]._id,
		amount: 1000,
		currency: "NGN",
		amountBeforePayment: savings[0].amount,
		amountAfterPayment: savings[0].amount + 1000,
		createdAt: "2024-12-12T10:00:00Z",
		updatedAt: "2024-12-12T10:00:00Z",
	},
	{
		_id: "3",
		savingsId: savings[0]._id,
		amount: 800,
		currency: "NGN",
		amountBeforePayment: savings[0].amount,
		amountAfterPayment: savings[0].amount + 800,
		createdAt: "2024-12-12T10:00:00Z",
		updatedAt: "2024-12-12T10:00:00Z",
	},
	{
		_id: "4",
		savingsId: savings[0]._id,
		amount: 1500,
		currency: "NGN",
		amountBeforePayment: savings[0].amount,
		amountAfterPayment: savings[0].amount + 1500,
		createdAt: "2024-12-12T10:00:00Z",
		updatedAt: "2024-12-12T10:00:00Z",
	},
];

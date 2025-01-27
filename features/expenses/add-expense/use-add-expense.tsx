import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import createExpense from "@/services/expenses/create-expense";
import { ExpenseTypesList } from "@/types/expense";

const validate = z.object({
	category: z.enum(ExpenseTypesList, { message: "must be a valid category" }),
	comments: z.string().trim().max(30, "Comments must not exceed 30 characters").optional(),
	amount: z
		.number({ message: "Savings Target must be a valid number" })
		.positive({ message: "Savings Target must be a positive number" }),
});

type FormData = z.infer<typeof validate>;

const initial: FormData = {
	category: "education",
	comments: "",
	amount: 0,
};

export default function useAddExpense() {
	const { user } = useAppSelector((state) => state.account);
	const { budget } = useAppSelector((state) => state.expenses);
	const [isLoading, setIsLoading] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData>(initial);
	const { expense, ui } = useActions();

	const reset = () => {
		setFormData(initial);
	};

	const close = () => {
		if (isLoading) return;
		actions("close");
		reset();
	};

	const actions = (type: "open" | "close") => {
		if (isLoading) return;
		if (type === "open") return setOpen(true);
		return setOpen(false);
	};

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => {
			if (name === "amount") {
				return {
					...prev,
					[name]: Number(value),
				};
			}
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const create = async () => {
		if (!user?._id) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({
				...formData,
			});
			const response = await createExpense({
				...formValues,
				createdBy: user._id,
				currency: "NGN",
			});
			
			expense.addExpense([response]);
			expense.updateBudget({ currentExpense: (budget?.currentExpense ?? 0) + response.amount });

			ui.toggleToast({ msgs: "Savings Created Successfully", show: true });

			actions("close");
			reset();
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		isLoading,
		open,
		close,
		actions,
		updateForm,
		create,
	};
}

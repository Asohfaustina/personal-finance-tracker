import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import store from "@/store";
import { createSelector } from "@reduxjs/toolkit";
import { z } from "zod";
import updateBudget from "@/services/expenses/update-budget";
import ensureError from "@/lib/ensure-error";
import createBudget from "@/services/expenses/create-budget";

const selectAccount = (state: ReturnType<typeof store.getState>) => state.account;
const selectExpense = (state: ReturnType<typeof store.getState>) => state.expenses;
const selectedStates = createSelector([selectAccount, selectExpense], (account, expense) => ({
	user: account.user,
	budget: expense.budget,
}));

const validate = z.object({
	budget: z
		.number({ message: "Budget must be a valid number" })
		.positive({ message: "Budget must be a positive number" }),
	duration: z
		.string({ message: "Duration must be a string" })
		.refine((val) => !isNaN(Date.parse(val)), {
			message: "Duration must be a valid ISO date string",
		}),
});

export default function useBudgetActions(close: (state?: boolean) => void) {
	const { user, budget } = useAppSelector(selectedStates);

	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState({
		duration: budget?.duration ?? "",
		budget: String(budget?.budget ?? ""),
	});

	const { expense, ui } = useActions();

	const userId = user._id;

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const update = async () => {
		if (!budget) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({ ...formData, budget: Number(formData.budget) });
			const response = await updateBudget({ ...formValues, id: budget?._id });
			expense.updateBudget(response);
			ui.toggleToast({ msgs: "Budget Updated Successfully", show: true });
			close(false);
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	const create = async () => {
		setIsLoading(true);
		try {
			const formValues = validate.parse({ ...formData, budget: Number(formData.budget) });
			const payload = {
				...formValues,
				currency: "ngn",
				userId,
			};
	
			const response = await createBudget(payload);
			expense.updateBudget(response);
			ui.toggleToast({ msgs: "Budget Created Successfully", show: true });
			close(false);
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		isUpdate: budget !== null,
		isLoading,
		updateForm,
		update,
		create,
	};
}

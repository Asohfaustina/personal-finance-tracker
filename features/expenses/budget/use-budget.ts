import getBudget from "@/services/expenses/get-budget";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import { useQuery } from "react-query";
import * as React from "react";
import store from "@/store";
import { createSelector } from "@reduxjs/toolkit";

const selectAccount = (state: ReturnType<typeof store.getState>) => state.account;
const selectExpense = (state: ReturnType<typeof store.getState>) => state.expenses;
const selectedStates = createSelector([selectAccount, selectExpense], (account, expense) => ({
	user: account.user,
	budget: expense.budget,
}));

export default function useBudget() {
	const { user, budget } = useAppSelector(selectedStates);
	const [open, setOpen] = React.useState(false);

	const { expense } = useActions();
	const userId = user._id;

	const response = useQuery(["budget", userId], () => getBudget({ userId }), {
		onSuccess(data) {
			expense.updateBudget(data);
		},
	});

	const resetBudget = React.useCallback(() => {
		if (!budget) return;
		const date = new Date().getTime();
		const duration = new Date(budget.duration).getTime();

		if (date > duration) {
			expense.updateBudget(null);
		}
	}, [budget]);

	const toggle = (state?: boolean) => {
		// if (state) return setOpen(state);
		setOpen((prev) => !prev);
	};

	React.useEffect(() => {
		resetBudget();
	}, []);

	return {
		...response,
		budget,
		toggle,
		open,
	};
}

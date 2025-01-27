
import updateObject from "@/lib/update-object";
import { Budget } from "@/types/budget";
import { Expense } from "@/types/expense";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExpenseState = {
	expenses: Expense[];
	budget: Budget | null;
};

const initialState: ExpenseState = {
	expenses: [],
	budget: null,
};

const expenseSlice = createSlice({
	name: "expense",
	initialState,
	reducers: {
		// TODO: find a way to update budget amount when a new expense is made
		addExpense: (state, action: PayloadAction<Expense[]>) => {
			const originals = state.expenses.map((item) => item._id);
			const updates = action.payload.filter((item) => !originals.includes(item._id));
			return {
				...state,
				expenses: [...updates, ...state.expenses],
			};
		},

		updateBudget: (state, action: PayloadAction<Partial<Budget>>) => {
			if (state.budget) {
				const updates = updateObject(state.budget, action.payload);
				return {
					...state,
					budget: updates,
				};
			}
			return { ...state };
		},
		setBudget: (state, action: PayloadAction<Budget | null>) => {
			return {
				...state,
				budget: action.payload,
			};
		},
		resetExpenseState: () => initialState,
	},
});

export const { addExpense, setBudget, updateBudget, resetExpenseState } = expenseSlice.actions;
export default expenseSlice.reducer;

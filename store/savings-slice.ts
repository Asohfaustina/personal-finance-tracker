import updateObject from "@/lib/update-object";
import { Savings, SavingsHistory } from "@/types/savings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SavingsState = {
	savings: Savings[];
	history: SavingsHistory[];
	details: Savings;
};

const initialState: SavingsState = {
	savings: [],
	history: [],
	details: {} as Savings,
};

const savingsSlice = createSlice({
	name: "savings",
	initialState,
	reducers: {
		addSavings: (state, action: PayloadAction<Savings[]>) => {
			const originals = state.savings.map((item) => item._id);
			const updates = action.payload.filter((item) => !originals.includes(item._id));

			return {
				...state,
				savings: [...updates, ...state.savings],
			};
		},

		addHistory: (state, action: PayloadAction<SavingsHistory[]>) => {
			const originals = state.history.map((item) => item._id);
			const updates = action.payload.filter((item) => !originals.includes(item._id));

			return {
				...state,
				history: [...updates, ...state.history],
			};
		},

		updateSavings: (state, action: PayloadAction<Partial<Savings>>) => {
			const updates = updateObject(state.details, action.payload);
			const updatedList = state.savings.map((item) =>
				item._id === updates._id ? { ...item, ...updates } : item
			);
			return {
				...state,
				savings: updatedList,
				details: updates,
			};
		},
	},
});

export const { addSavings, addHistory, updateSavings } = savingsSlice.actions;
export default savingsSlice.reducer;

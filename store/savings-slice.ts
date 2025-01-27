import updateObject from "@/lib/update-object";
import { Savings, SavingsHistory } from "@/types/savings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SavingsHistoryPayload = {
	savingsId: string;
	data: SavingsHistory[];
};

export type SavingsState = {
	savings: Savings[];
	history: Record<string, SavingsHistory[]>;
	details: Savings | null;
};

const initialState: SavingsState = {
	savings: [],
	history: {},
	details: null,
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

		addHistory: (state, action: PayloadAction<SavingsHistoryPayload>) => {
			const savingsHistory = Object.keys(state.history).find(
				(item) => item === action.payload.savingsId
			);

			if (savingsHistory?.length) {
				const originals = state.history[action.payload.savingsId].map((item) => item._id);

				const updates = action.payload.data.filter((item) => !originals.includes(item._id));
				return {
					...state,
					history: {
						...state.history,
						[action.payload.savingsId]: [...updates, ...state.history[action.payload.savingsId]],
					},
				};
			}

			return {
				...state,
				history: {
					...state.history,
					[action.payload.savingsId]: action.payload.data,
				},
			};
		},
		setSavingsDetails: (state, action: PayloadAction<Savings>) => {
			return {
				...state,
				details: action.payload,
			};
		},

		updateSavingsDetails: (state, action: PayloadAction<Partial<Savings>>) => {
			if (!state.details) return { ...state };

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

		dissolveSavings: (state, action: PayloadAction<string>) => {
			const find = state.savings.find((item) => item._id === action.payload);

			if (find) {
				const first = state.savings.find((item) => item._id !== find._id);
				if (first) {
					const updatedList = state.savings
						.filter((item) => item._id !== find._id)
						.map((item) =>
							item._id == first._id ? { ...item, amount: item.amount + find.amount } : item
						);

					return {
						...state,
						savings: updatedList,
					};
				}
			}
		},
		resetSavingsState : ()=> initialState
	},
});

export const { addSavings, addHistory, setSavingsDetails, updateSavingsDetails, dissolveSavings, resetSavingsState } =
	savingsSlice.actions;
export default savingsSlice.reducer;

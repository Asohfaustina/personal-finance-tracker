import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import updateObject from "@/lib/update-object";
import { User } from "@/types/user";

export type AccountState = {
	user: User;
	refreshToken: string;
	authToken: string;
	expiresAt: number;
};

const initialState: AccountState = {
	user: {} as User,
	refreshToken: "",
	authToken: "",
	expiresAt: 0,
};

const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<Partial<User>>) => {
			return {
				...state,
				user: updateObject(state.user, action.payload as any),
			};
		},
		changeAccountState: (state, action: PayloadAction<Partial<AccountState>>) => {
			return {
				...state,
				authToken: action.payload.authToken ?? state.authToken,
				refreshToken: action.payload.refreshToken ?? state.refreshToken,
				expiresAt: action.payload.expiresAt ?? state.expiresAt,
				user: action.payload.user ?? state.user,
			};
		},
	},
});

export const { changeAccountState, updateUser } = accountSlice.actions;
export default accountSlice.reducer;

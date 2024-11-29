import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ToastType = "warning" | "success";

export type ToastAction = { show: boolean; type?: ToastType; msgs?: string };

export type UiState = {
	isLoading: boolean;
	showToast: boolean;
	toastMsg: string;
	toastType: ToastType;
};

const initialState: UiState = {
	isLoading: false,
	showToast: false,
	toastMsg: "Error message to be shown",
	toastType: "success",
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		changeLoading: (state, action: PayloadAction<boolean>) => {
			return {
				...state,
				isLoading: action.payload,
			};
		},
		toggleToast: (state, action: PayloadAction<ToastAction>) => {
			return {
				...state,
				showToast: action.payload.show,
				toastType: action.payload.type ?? state.toastType,
				toastMsg: action.payload.msgs ?? state.toastMsg,
			};
		},
	},
});

export const { changeLoading, toggleToast } = uiSlice.actions;
export default uiSlice.reducer;

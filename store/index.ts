import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootSlice, { RootState } from "./root.slice";
import accountSlice, { AccountState } from "./account.slice";
import uiSlice from "./ui-slice";
import savingsSlice, { SavingsState } from "./savings-slice";
import expenseSlice, { ExpenseState } from "./expense-slice";

const store = configureStore({
	reducer: {
		ui: uiSlice,
		root: persistReducer<RootState>({ key: "root", storage: AsyncStorage }, rootSlice),
		account: persistReducer<AccountState>({ key: "accounts", storage: AsyncStorage }, accountSlice),
		savings: persistReducer<SavingsState>({ key: "savings", storage: AsyncStorage }, savingsSlice),
		expenses: persistReducer<ExpenseState>({key: "expenses", storage: AsyncStorage},expenseSlice )
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
persistor.purge();
export default store;

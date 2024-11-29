import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootSlice, { RootState } from "./root.slice";
import accountSlice, { AccountState } from "./account.slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    root: persistReducer<RootState>({ key: "root", storage: AsyncStorage }, rootSlice),
    account: persistReducer<AccountState>({ key: "accounts", storage: AsyncStorage }, accountSlice),
    ui: uiSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;

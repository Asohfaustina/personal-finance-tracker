import { createSlice } from "@reduxjs/toolkit";

export type AccountState = {
  user: any;
  authToken: string;
  refreshToken: string;
  expiresAt: number;
};

const initialState: AccountState = {
  user: {},
  authToken: "",
  refreshToken: "",
  expiresAt:0
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;

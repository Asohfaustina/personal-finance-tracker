import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RootState = {
  isLoggedIn: boolean;
  isOnboarded: boolean;
};

const initialState: RootState = {
  isOnboarded: false,
  isLoggedIn: false,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    changeIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },

    changeIsOnboarded: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isOnboarded: action.payload,
      };
    },
  },
});

export const { changeIsLoggedIn, changeIsOnboarded } = rootSlice.actions;
export default rootSlice.reducer;

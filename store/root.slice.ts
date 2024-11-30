import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RootState = {
	isLoggedIn: boolean;
	isOnboarded: boolean;
	hasSetup: boolean;
};

const initialState: RootState = {
	isOnboarded: false,
	isLoggedIn: false,
	hasSetup: false,
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
    changeHasSetup: (state, action:PayloadAction<boolean>) => {
      return {
        ...state,
        hasSetup: action.payload
      }
    }
  },
});

export const { changeIsLoggedIn, changeIsOnboarded, changeHasSetup } = rootSlice.actions;
export default rootSlice.reducer;

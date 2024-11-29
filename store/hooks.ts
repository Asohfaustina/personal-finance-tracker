import { type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppRootState } from "./index";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

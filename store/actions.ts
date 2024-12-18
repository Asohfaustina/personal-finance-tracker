import { User } from "@/types/user";
import { AccountState, changeAccountState, updateUser } from "./account.slice";
import { useAppDispatch } from "./hooks";
import { changeHasSetup, changeIsLoggedIn, changeIsOnboarded } from "./root.slice";
import { changeLoading, ToastAction, toggleToast } from "./ui-slice";
import {
	addHistory,
	addSavings,
	dissolveSavings,
	setSavingsDetails,
	updateSavingsDetails,
} from "./savings-slice";
import { Savings, SavingsHistory } from "@/types/savings";
import { addExpense, updateBudget } from "./expense-slice";
import { Expense } from "@/types/expense";
import { Budget } from "@/types/budget";

/**
 * this is a utility function to help with dispatching action
 * NOTE: all all actions should be registered here to enable usage.
 */
export default function useActions() {
	const dispatch = useAppDispatch();

	const root = {
		changeIsOnboarded: (state: boolean) => dispatch(changeIsOnboarded(state)),
		changeIsLoggedIn: (state: boolean) => dispatch(changeIsLoggedIn(state)),
		changeHasSetup: (state: boolean) => dispatch(changeHasSetup(state)),
	};

	const ui = {
		toggleToast: (payload: ToastAction) => dispatch(toggleToast(payload)),
		changeLoading: (state: boolean) => dispatch(changeLoading(state)),
	};

	const account = {
		updateUser: (payload: Partial<User>) => dispatch(updateUser(payload)),
		changeAccountState: (payload: AccountState) => dispatch(changeAccountState(payload)),
	};

	const savings = {
		addSavings: (payload: Savings[]) => dispatch(addSavings(payload)),
		addHistory: (payload: SavingsHistory[]) => dispatch(addHistory(payload)),
		setSavingsDetails: (payload: Savings) => dispatch(setSavingsDetails(payload)),
		updateSavingsDetails: (payload: Partial<Savings>) => dispatch(updateSavingsDetails(payload)),
		dissolveSavings: (payload: string) => dispatch(dissolveSavings(payload)),
	};

	const expense = {
		addExpense: (payload: Expense[]) => dispatch(addExpense(payload)),
		updateBudget: (payload: Budget | null) => dispatch(updateBudget(payload)),
	};
	return {
		root,
		ui,
		account,
		savings,
		expense,
	};
}

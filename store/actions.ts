import { User } from "@/types/user";
import { AccountState, changeAccountState, resetAccountState, updateUser } from "./account.slice";
import { useAppDispatch } from "./hooks";
import { changeHasSetup, changeIsLoggedIn, changeIsOnboarded } from "./root.slice";
import { changeLoading, ToastAction, toggleToast } from "./ui-slice";
import {
	addHistory,
	addSavings,
	dissolveSavings,
	resetSavingsState,
	SavingsHistoryPayload,
	setSavingsDetails,
	updateSavingsDetails,
} from "./savings-slice";
import { Savings, SavingsHistory } from "@/types/savings";
import { addExpense, resetExpenseState, setBudget, updateBudget } from "./expense-slice";
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
		changeAccountState: (payload: Partial<AccountState>) => dispatch(changeAccountState(payload)),
	};

	const savings = {
		addSavings: (payload: Savings[]) => dispatch(addSavings(payload)),
		addHistory: (payload: SavingsHistoryPayload) => dispatch(addHistory(payload)),
		setSavingsDetails: (payload: Savings) => dispatch(setSavingsDetails(payload)),
		updateSavingsDetails: (payload: Partial<Savings>) => dispatch(updateSavingsDetails(payload)),
		dissolveSavings: (payload: string) => dispatch(dissolveSavings(payload)),
	};

	const expense = {
		addExpense: (payload: Expense[]) => dispatch(addExpense(payload)),
		setBudget: (payload: Budget | null) => dispatch(setBudget(payload)),
		updateBudget: (payload :Partial<Budget>)=> dispatch(updateBudget(payload))
	};

	const resetStates = () => {
		const states = [resetAccountState, resetExpenseState, resetSavingsState]
		states.map(state => dispatch(state()))
	}
	return {
		root,
		ui,
		account,
		savings,
		expense,
		resetStates,
	};
}

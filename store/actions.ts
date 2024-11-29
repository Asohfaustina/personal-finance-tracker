import { useAppDispatch } from "./hooks";
import { changeIsLoggedIn, changeIsOnboarded } from "./root.slice";
import { changeLoading, ToastAction, toggleToast } from "./ui-slice";

export default function useActions() {
	const dispatch = useAppDispatch();

	const root = {
		changeIsOnboarded: (state: boolean) => dispatch(changeIsOnboarded(state)),
		changeIsLoggedIn: (state: boolean) => dispatch(changeIsLoggedIn(state)),
	};

	const ui = {
		toggleToast: (payload: ToastAction) => dispatch(toggleToast(payload)),
		changeLoading: (state: boolean) => dispatch(changeLoading(state)),
	};
	return {
		root,
		ui,
	};
}

import getSavings from "@/services/savings/get-savings";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import { useQuery } from "react-query";

export default function useSlides() {
	const { user } = useAppSelector((state) => state.account);
	const { savings } = useAppSelector((state) => state.savings);
	const { savings: savingsActions } = useActions();
	const userId = user._id;

	const response = useQuery(["savings", userId], () => getSavings({ userId }), {
		onSuccess(data) {
			savingsActions.addSavings(data);
		},
	});
	return {
		...response,
		savings,
	};
}

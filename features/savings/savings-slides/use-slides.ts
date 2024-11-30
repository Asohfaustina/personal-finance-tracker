import getSavings from "@/services/savings/get-savings";
import { useAppSelector } from "@/store/hooks";
import { useQuery } from "react-query";

export default function useSlides() {
	const { user } = useAppSelector((state) => state.account);
	const userId = user._id;

	return useQuery(["savings", userId], () => getSavings({ userId }));
}

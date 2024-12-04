import findExpense from "@/services/expenses/find-expense";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

import { useQuery } from "react-query";
import * as React from "react";
import { router } from "expo-router";

export default function useDetails() {
	const { id } = useLocalSearchParams<{ id?: string }>();

	const [show, setShow] = React.useState(false);
	const press = () => {
		setShow(false);
		router.setParams({ id: "" });
	};
	const hasId = React.useMemo(() => {
		if (!id) return false;
		setShow(true);
		return true;
	}, [id]);
	return {
		...useQuery(["expense-details", id], () => findExpense(id ?? ""), {
			enabled: hasId,
			// onSuccess() {
			// 	setShow(true);
			// },
		}),
		show,
		press,
	};
}

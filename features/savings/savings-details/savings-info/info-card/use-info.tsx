import findSavings from "@/services/savings/find-savings";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "react-query";
import * as React from "react";
import { useAppSelector } from "@/store/hooks";
import useActions from "@/store/actions";

export default function useInfo() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { details } = useAppSelector((state) => state.savings);
	const [edit, setEdit] = React.useState(false);
	const [dissolve, setDissolve] = React.useState(false);
	const { savings } = useActions();

	const openActions = (type: "dissolve" | "edit_savings") => {
		if (edit || dissolve) return;
		if (type === "dissolve") return setDissolve(true);
		return setEdit(true);
	};
	const closeActions = (type: "dissolve" | "edit_savings") => {
		if (type === "dissolve") return setDissolve(false);
		return setEdit(false);
	};
	const response = useQuery(["savings-info", id], () => findSavings(id), {
		onSuccess(data) {
			savings.setSavingsDetails(data);
		},
	});

	return {
		...response,
		edit,
		dissolve,
		details,
		openActions,
		closeActions,
	};
}

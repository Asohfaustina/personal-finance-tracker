import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import addSavings from "@/services/savings/add-savings";

const validate = z.object({
	amount: z
		.number({ message: "Savings Target must be a valid number" })
		.positive({ message: "Savings Target must be a positive number" }),
});

type FormData = z.infer<typeof validate>;

export default function useAddSavings() {
	const { details } = useAppSelector((state) => state.savings);
	const [isLoading, setIsLoading] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const initial = {
		amount: 0,
	};
	const [formData, setFormData] = React.useState<FormData>(initial);
	const { savings, ui } = useActions();

	const reset = () => {
		setFormData(initial);
	};

	const actions = (type: "open" | "close") => {
		if (isLoading) return;
		if (type === "open") return setOpen(true);
		return setOpen(false);
	};

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: Number(value),
		}));
	};

	const update = async () => {
		if (!details?._id) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({
				...formData,
			});
			const response = await addSavings({ ...formValues, savingsId: details._id });
			savings.addHistory([response]);
			savings.updateSavingsDetails({ amount: details.amount + response.amount });
			ui.toggleToast({ msgs: "Savings added Successfully", show: true });
			actions('close');
			reset();
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		isLoading,
		open,
		actions,
		updateForm,
		update,
	};
}

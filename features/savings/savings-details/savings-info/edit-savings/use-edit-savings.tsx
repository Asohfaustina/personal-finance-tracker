import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import updateSavings from "@/services/savings/update-savings";



const validate = z.object({
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(12, "Title must not exceed 12 characters"),
	comments: z.string().trim().max(12, "Title must not exceed 12 characters").optional(),
	targetAmount: z
		.number({ message: "Savings Target must be a valid number" })
		.positive({ message: "Savings Target must be a positive number" }),
	duration: z
		.string({ message: "Duration must be a string" })
		.refine((val) => !isNaN(Date.parse(val)), {
			message: "Duration must be a valid ISO date string",
		}),
});

type FormData = z.infer<typeof validate>;
export default function useEditSavings(close: () => void) {
	const { details } = useAppSelector((state) => state.savings);
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData>({
		title: details?.title ?? "",
		comments: details?.comments ?? "",
		targetAmount: details?.targetAmount ?? 0,
		duration: details?.duration ?? "",
	});
	const { savings, ui } = useActions();

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const update = async () => {
		if (!details?._id) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({
				...formData,
				targetAmount: Number(formData.targetAmount),
			});
			const response = await updateSavings({ ...formValues, id: details._id });
			savings.updateSavingsDetails(response);
			ui.toggleToast({ msgs: "Savings Updated Successfully", show: true });
			close();
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	const handleClose = () => {
		if (isLoading) return;
		close();
	};

	return {
		formData,
		isLoading,
		updateForm,
		update,
		close: handleClose,
	};
}

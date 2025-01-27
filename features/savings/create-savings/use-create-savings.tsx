import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import createSavings from "@/services/savings/create-savings";

const validate = z.object({
	title: z
		.string()
		.trim()
		.min(3, "Title must be at least 3 characters")
		.max(12, "Title must not exceed 12 characters"),
	comments: z.string().trim().max(30, "Comments must not exceed 30 characters").optional(),
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

const initial: FormData = {
	title: "",
	comments: "",
	targetAmount: 0,
	duration: "",
};

export default function useCreateSavings() {
	const { user } = useAppSelector((state) => state.account);
	const { savings } = useAppSelector((state) => state.savings);
	const [isLoading, setIsLoading] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData>(initial);
	const { savings: savingsActions, ui } = useActions();

	const reset = () => {
		setFormData(initial);
	};

	const close = () => {
		if (isLoading) return;
		actions("close");
		reset();
	};

	const actions = (type: "open" | "close") => {
		if (isLoading) return;
		if (type === "open") return setOpen(true);
		return setOpen(false);
	};

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => {
			if (name === "targetAmount") {
				return {
					...prev,
					[name]: Number(value),
				};
			}
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const maxSavings = React.useMemo(() => {
		return savings.length === 5;
	}, [savings]);
	const create = async () => {
		if (!user?._id) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({
				...formData,
			});
			const response = await createSavings({
				...formValues,
				createdBy: user._id,
				currency: "NGN",
			});
			savingsActions.addSavings([response]);
			ui.toggleToast({ msgs: "Savings Created Successfully", show: true });
			actions("close");
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
		maxSavings,
		close,
		actions,
		updateForm,
		create,
	};
}

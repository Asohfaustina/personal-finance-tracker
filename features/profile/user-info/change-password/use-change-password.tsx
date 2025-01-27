import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import resetPassword from "@/services/account/reset-password";

const validate = z.object({
	oldPassword: z.string().trim().min(8, "Password must be at least 8 characters"),
	newPassword: z.string().trim().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof validate>;

const initial = {
	oldPassword: "",
	newPassword: "",
};
export default function useChangePassword(close: () => void) {
	const { user } = useAppSelector((state) => state.account);
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData>(initial);
	const { ui } = useActions();

	const reset = () => {
		close();
		setFormData(initial);
	};

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const update = async () => {
		if (!user?.email) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);
			await resetPassword({ ...formValues, email: user.email });
			ui.toggleToast({ msgs: "Password Updated Successfully", show: true });
			reset();
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

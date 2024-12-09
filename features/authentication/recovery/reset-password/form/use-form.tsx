import ensureError from "@/lib/ensure-error";
import recoverPassword from "@/services/account/recover-password";
import useActions from "@/store/actions";
import { router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { z } from "zod";

const validate = z.object({
	newPassword: z.string().trim().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().trim().min(8, "Password must be at least 8 characters"),
});

const initial = {
	newPassword: "",
	confirmPassword: "",
};
export default function useForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState(initial);
	const { ui } = useActions();
	const { email, otp } = useLocalSearchParams<{ email: string; otp: string }>();

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const reset = () => {
		setFormData(initial);
	};
	const submit = async () => {
		if (!email || !otp) return;
		if (formData.newPassword.trim() !== formData.confirmPassword.trim()) {
			return ui.toggleToast({
				msgs: "Both password must match",
				show: true,
			});
		}
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);
			await recoverPassword({ email, otp, ...formValues });
			ui.toggleToast({
				msgs: "Password Reset successfully",
				show: true,
			});
			router.replace("/(root)/(recovery)/reset-success");
			reset();
		} catch (error) {
			const errMsg = ensureError(error).message;
			ui.toggleToast({
				msgs: errMsg,
				show: true,
			});
			router.back();
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		formData,
		updateForm,
		submit,
	};
}

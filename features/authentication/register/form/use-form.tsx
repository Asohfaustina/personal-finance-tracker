import ensureError from "@/lib/ensure-error";
import createAccount from "@/services/account/create-account";
import useActions from "@/store/actions";
import { router } from "expo-router";
import * as React from "react";
import { z } from "zod";

const validate = z.object({
	email: z.string().trim().email("Email must be valid"),
	name: z.string().trim().min(5, "Name is required"),
	password: z.string().trim().min(8, "password be at least 8 characters"),
	confirmPassword: z.string().trim().min(8, "password be at least 8 characters"),
});

const initial = {
	email: "",
	name: "",
	password: "",
	confirmPassword: "",
};
export default function useForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState(initial);
	const { ui } = useActions();

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
		if (formData.password.trim() !== formData.confirmPassword.trim()) {
			return ui.toggleToast({
				msgs: "Both passwords must match",
				show: true,
			});
		}
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);

			await createAccount(formValues);
			ui.toggleToast({
				msgs: "Account created Successfully!",
				show: true,
			});
			router.push(`/(root)/verify-email?email=${formValues.email}`);
			reset();
		} catch (error) {
			const errMsg = ensureError(error).message;
			ui.toggleToast({
				msgs: errMsg,
				show: true,
			});
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

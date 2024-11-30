import ensureError from "@/lib/ensure-error";
import loginAccount from "@/services/account/login-account";
import useActions from "@/store/actions";
import { router } from "expo-router";
import * as React from "react";
import { z } from "zod";

const validate = z.object({
	email: z.string().trim().email("Email must be valid"),
	password: z.string().trim().min(8, "password is required"),
});

const initial = {
	email: "",
	password: "",
};
export default function useForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState(initial);
	const { ui, root, account } = useActions();

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const submit = async () => {
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);

			const response = await loginAccount(formValues);
			account.changeAccountState({
				user: response.user,
				refreshToken: response.refresh,
				authToken: response.key,
				expiresAt: response.exp,
			});

			root.changeIsLoggedIn(true);

			ui.toggleToast({
				msgs: "sign in Successful!",
				show: true,
			});
			router.push(`/(root)/(main)/(tabs)/(home)`);
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

import ensureError from "@/lib/ensure-error";
import sendOtp from "@/services/account/send-otp";
import useActions from "@/store/actions";
import { router } from "expo-router";
import * as React from "react";
import { z } from "zod";

const validate = z.object({
	email: z.string().trim().email("Email must be valid"),
});

const initial = {
	email: "",
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
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);

			await sendOtp(formValues);
			ui.toggleToast({
				msgs: "OTP sent to email",
				show: true,
			});
			router.push(`/(root)/(recovery)/verify?email=${formValues.email}`);
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

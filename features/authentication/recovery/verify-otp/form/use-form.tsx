import ensureError from "@/lib/ensure-error";
import sendOtp from "@/services/account/send-otp";
import useActions from "@/store/actions";
import { router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { z } from "zod";

const validate = z.object({
	otp: z.string().trim().min(6, "OTP must be 6 characters"),
});

const initial = {
	otp: "",
};
export default function useForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState(initial);
	const [isError, setIsError] = React.useState(false);
	const [errMsg, setErrMsg] = React.useState("");
	const { ui } = useActions();
	const { email } = useLocalSearchParams<{ email: string }>();

	const updateForm = (name: keyof typeof formData, value: string) => {
		setIsError(false);
		setErrMsg("");
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const resend = async () => {
		if (!email) return;
		setIsLoading(true);
		try {
			await sendOtp({ email });
			ui.toggleToast({
				msgs: "OTP sent to email",
				show: true,
			});
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

	const submit = async () => {
		if (!email) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse(formData);
			router.push(`/(root)/(recovery)/reset?email=${email}&otp=${formValues.otp}`);
		} catch (error) {
			const errMsg = ensureError(error).message;
			setIsError(true);
			setErrMsg(errMsg);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		isError,
		errMsg,
		formData,
		updateForm,
		resend,
		submit,
	};
}

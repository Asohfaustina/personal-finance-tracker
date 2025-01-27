import ensureError from "@/lib/ensure-error";
import sendEmailVerificationOtp from "@/services/account/send-email-verification-otp";
import verifyEmail from "@/services/account/verify-email";
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
			await sendEmailVerificationOtp({ email });
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

			await verifyEmail({ email, ...formValues });
			ui.toggleToast({
				msgs: "Email Verified",
				show: true,
			});
			router.replace(`/`);
		} catch (error) {
			const errMsg = ensureError(error).message;
			setIsError(true);
			setErrMsg(errMsg);
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		resend();
	}, []);

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

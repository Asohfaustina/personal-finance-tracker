import AuthContainer from "@/components/container/auth-container";
import * as React from "react";
import Form from "./form";
import { useLocalSearchParams } from "expo-router";
import truncate from "@/lib/truncate";

export default function VerifyOtp() {
	const { email } = useLocalSearchParams<{ email: string }>();
	const emailLength = email.length;
	return (
		<AuthContainer
			title="Verify Email"
			subTitle={`Enter the OTP sent to ${truncate(email, emailLength / 3)}${email.slice(
				email.length - emailLength / 2
			)}.`}
		>
			<Form />
		</AuthContainer>
	);
}

import AuthContainer from "@/components/container/auth-container";
import * as React from "react";
import Form from "./form";

export default function ResetPassword() {
	return (
		<AuthContainer title="Reset Password" subTitle="Fill out form to reset password.">
			<Form />
		</AuthContainer>
	);
}

import * as React from "react";
import Form from "./form";
import AuthContainer from "@/components/container/auth-container";

export default function Login() {
	return (
		<AuthContainer title="Sign In" subTitle="Fill out the form to sign in.">
			<Form />
		</AuthContainer>
	);
}

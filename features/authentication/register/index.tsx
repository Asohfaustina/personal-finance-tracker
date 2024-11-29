import * as React from "react";
import Form from "./form";
import AuthContainer from "@/components/container/auth-container";

export default function Register() {
	return (
		<AuthContainer title="Sign Up" subTitle="Fill out the form to create an account.">
			<Form />
		</AuthContainer>
	);
}

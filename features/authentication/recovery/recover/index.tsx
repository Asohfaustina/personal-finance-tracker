import AuthContainer from "@/components/container/auth-container";
import * as React from "react";
import Form from "./form";

export default function Recovery() {
	return (
		<AuthContainer title="Recover Password" subTitle="Fill out form to recover password.">
			<Form />
		</AuthContainer>
	);
}

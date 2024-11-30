import * as React from "react";
import Form from "./form";
import AuthContainer from "@/components/container/auth-container";
import { useAppSelector } from "@/store/hooks";
import { Redirect } from "expo-router";

export default function Login() {
	const { isLoggedIn } = useAppSelector((state) => state.root);

	if (isLoggedIn) return <Redirect href={"/(root)/(main)/(tabs)/(home)"} />;

	return (
		<AuthContainer title="Sign In" subTitle="Fill out the form to sign in.">
			<Form />
		</AuthContainer>
	);
}

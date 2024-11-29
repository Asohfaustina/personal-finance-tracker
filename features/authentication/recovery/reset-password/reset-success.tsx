import AuthContainer from "@/components/container/auth-container";
import * as React from "react";
import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";
import { View } from "@/components/theme";
import { Link } from "expo-router";

export default function ResetSuccess() {
	return (
		<AuthContainer title="Reset Password" subTitle="Proceed to Sign in with the new Password.">
			<View style={styles.container}>
				<Link href={"/"} replace style={[styles.link]}>
					Sign In
				</Link>
			</View>
		</AuthContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: layout.padding.md,
		borderRadius: layout.radius.sm,
		backgroundColor: "transparent",
		borderWidth: 0.2,
	},
	link: {
		width: "100%",
		padding: layout.padding.md,
		backgroundColor: colors.primary[700],
		borderRadius: layout.radius.md,
		fontSize: layout.font.md,
		textAlign: "center",
		color: colors.white[400],
	},
});

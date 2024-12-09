import { Text, View } from "@/components/theme";
import * as React from "react";
import { UserInfo } from "..";
import { AppButton } from "@/components/app-button";
import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export default React.memo(function Logout(props: UserInfo) {
	return (
		<View style={styles.container}>
			<AppButton press={props.press}>
				<View style={styles.titleBox}>
					{props.icon}
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</AppButton>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: layout.padding.md,
	},
	titleBox: {
		flexDirection: "row",
		alignItems: "center",
		flexGrow: 1,
		gap: 20,
	},
	title: {
		color: colors.warning[600],
		fontWeight: "600",
		textDecorationLine: "underline",
	},
});

import { Text, View } from "@/components/theme";
import * as React from "react";
import { UserInfo } from ".";
import { AppButton } from "@/components/app-button";
import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";

export default React.memo(function InfoItem(props: UserInfo) {
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				{props.icon}
				<Text style={styles.title}>{props.title}</Text>
			</View>
			<AppButton press={!props.disabled ? props.press : () => {}} style={styles.actionBox}>
				<Text type="link" style={[styles.actionText, props.disabled && globalStyles.disabled]}>
					{props.actionText}
				</Text>
			</AppButton>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		padding: layout.padding.md,
		marginBottom: 5,
		borderBottomWidth: 0.3,
		borderColor: colors.mute,
	},
	titleBox: {
		flexDirection: "row",
		alignItems: "center",
		flexGrow: 1,
		gap: 20,
	},
	title: {
		color: colors.primary[700],
		fontWeight: "600",
	},
	actionBox: {
		// alignSelf:"flex-end"
	},
	actionText: {
		fontWeight: "500",
		textDecorationLine: "underline",
	},
});

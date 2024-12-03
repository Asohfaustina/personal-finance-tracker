import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		...globalStyles.px,
		gap: 20,
	},
	formBox: {
		width: "100%",
		padding: layout.padding.md,
		borderRadius: layout.radius.sm,
		backgroundColor: "transparent",
		borderWidth: 0.2,
	},
	inputBox: {
		gap: 3,
		backgroundColor: "transparent",
	},
	label: {
		color: colors.black[700],
	},
	input: {
		borderColor: colors.primary[700],
	},

	durationBox: {
		padding: layout.padding.sm + 3,
		borderRadius: layout.radius.xs,
		borderWidth: 0.3,
	},

	durationText: {
		fontSize: layout.font.md,
		fontWeight: "500",
	},

	actionBox: {
		...globalStyles.bgNone,
		alignItems: "center",
	},

	dismissBox: {
		...globalStyles.bgNone,
		alignItems: "center",
	},
	dismissText: {
		textAlign: "center",
		textDecorationLine: "underline",
	},
});

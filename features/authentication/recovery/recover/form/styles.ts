import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "none",
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

	actionBox: {
		backgroundColor: "none",
		alignItems: "center",
	},
	signInText: {
		textAlign: "center",
		color: colors.primary[700],
		fontSize: layout.font.md - 2,
		fontWeight: "600",
		textDecorationLine: "underline",
	},
});

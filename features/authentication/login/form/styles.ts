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

	recoveryBox: {
		flexDirection: "row",
		marginLeft: "auto",
		justifyContent: "flex-end",
	},

	recoveryText: {
		textAlign: "right",
		color: colors.primary[400],
		fontSize: layout.font.xs + 1,
		textDecorationLine: "underline",
	},
	actionBox: {
		backgroundColor: "none",
		alignItems: "center",
	},

	signUpText: {
		textAlign: "center",
		fontSize: layout.font.xs + 1,
		paddingRight: 20,
	},
});

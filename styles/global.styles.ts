import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	pressed: {
		opacity: 0.7,
	},
	disabled: {
		opacity: 0.4,
	},

	bgNone: {
		backgroundColor: "transparent",
	},
	px: {
		paddingHorizontal: layout.padding.md,
	},
	headers: {
		color: colors.primary[700],
		fontWeight: "600",
		fontSize: layout.font.md,
	},
});

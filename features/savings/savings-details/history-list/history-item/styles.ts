import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: layout.padding.sm + 3,
		borderBottomWidth: 0.5,
		borderBottomColor: colors.mute,
	},

	titleBox: {
		flexGrow: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},

	title: {
		color: colors.primary[900],
		fontWeight: "500",
		fontSize: layout.font.md,
		textTransform: "capitalize",
	},
	iconBox: {
		borderWidth: 0.5,
		borderRadius: "100%",
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	amountBox: {
		alignItems: "flex-end",
	},
	amount: {
		fontSize: layout.font.md,
		color: colors.primary[700],
		fontWeight: "600",
	},
	currency: {
		fontSize: layout.font.xs,
		color: colors.black[600],
	},

	balanceBox: {
		backgroundColor: colors.primary[800],
		borderRadius: layout.radius.sm,
		alignItems: "center",
		paddingHorizontal: layout.padding.sm,
	},
	balanceText: {
		color: colors.white[200],
		fontSize: layout.font.xs,
	},
	date: {
		fontSize: layout.font.xs,
		color: colors.black[600],
	},
});

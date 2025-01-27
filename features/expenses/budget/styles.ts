import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		height: 100,
		backgroundColor: colors.secondary[200],
	},

	budgetContainer: {
		flex: 1,
		gap:20,
		justifyContent: "center",
		...globalStyles.px,
		...globalStyles.bgNone,
	},
	titleBox: {
		...globalStyles.bgNone,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	actionBox: {
		...globalStyles.bgNone,
	},
	actionText: {
		textDecorationLine: "underline",
	},
	budgetBox: {
		gap: 5,
		...globalStyles.bgNone,
	},
	budgetHeaderBox: {
		...globalStyles.bgNone,

		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	budgetText: {
		color: colors.black[600],
	},

	budgetProgressBox: {
		...globalStyles.bgNone,
		flexDirection: "row",
		alignItems: "center",
	},
	progressBar: {
		height: 10,
		backgroundColor: colors.mute,
		flexGrow: 1,
		borderRadius: layout.radius.md,
	},
	progressIndicator: {
		height: 10,
		backgroundColor: colors.primary[700],
		borderRadius: layout.radius.md,
	},

	dangerZone: { backgroundColor: colors.warning[600] },
	currency: {
		fontSize: layout.font.xs,
		fontWeight: "600",
	},
	amount: {},

	noBudgetBox: {
		...globalStyles.bgNone,
		paddingVertical: layout.padding.md,
	},

	noBudgetText: {
		fontSize: layout.font.l,
		textAlign: "center",
		color: colors.black[600],
	},
});

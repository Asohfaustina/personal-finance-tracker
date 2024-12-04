import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		gap: 10,
		...globalStyles.bgNone,
		...globalStyles.px,
	},

	detailsBox: {
		width: "100%",
        gap:10,
		backgroundColor: colors.secondary[200],
		padding: layout.padding.sm,
		borderWidth: 0.9,
		borderColor: colors.black[400],
        borderRadius: layout.radius.sm,
	},

	category: {
		fontSize: layout.font.l,
		color: colors.primary[700],
		fontWeight: "500",
		textTransform: "capitalize",
	},
	comments: {
		color: colors.black[500],
	},

	date: {
		textAlign: "right",
	},

	amountBox: {
		...globalStyles.bgNone,
		alignItems: "center",
	},
	amount: {
		fontSize: layout.font.xl,
		fontWeight: "600",
		color: colors.primary[700],
	},
	currency: {
		color: colors.black[600],
		fontSize: layout.font.xs,
		fontWeight: "600",
	},
});

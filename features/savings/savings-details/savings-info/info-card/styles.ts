import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { Dimensions, StyleSheet } from "react-native";

const width = Math.floor(Dimensions.get("screen").width);

export const styles = StyleSheet.create({
	container: {
		height: 220,
		backgroundColor: colors.white[400],
		marginVertical: layout.margin.sm,
		marginHorizontal: layout.margin.md,
		borderWidth: 0.2,
		borderColor: colors.primary[900],
		borderRadius: layout.radius.sm,
	},
	cardBox: {
		...globalStyles.bgNone,
		flex: 1,
		padding: layout.padding.md,
	},
	headerBox: {
		...globalStyles.bgNone,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
	},

	savingsTitle: {
		fontSize: layout.font.md,
		color: colors.primary[700],
		fontWeight: "500",
		textTransform: "capitalize",
	},
	amountBox: {
		...globalStyles.bgNone,
		marginTop: 5,
	},
	currency: {
		fontSize: layout.font.sm,
		color: colors.black[600],
		fontWeight: "600",
	},
	savingsComment: {
		fontSize: layout.font.sm,
		color: colors.black[600],
	},

	footerBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		...globalStyles.bgNone,
	},

	durationBox: {
		...globalStyles.bgNone,
		// flexGrow: 1,
	},
	durationText: {
		fontSize: layout.font.sm,
	},
	durationDate: {
		fontSize: layout.font.sm,
		color: colors.black[600],
	},

	amount: {
		fontSize: layout.font.l,
		color: colors.primary[700],
		fontWeight: "600",
	},
	actionBox: {
		...globalStyles.bgNone,
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
	},
	editButton: {
		...globalStyles.buttonContainer,
		width: 170,
		backgroundColor: colors.white[200],
		borderColor: colors.primary[900],
		borderWidth: 0.5,
	},
	editText: {
		textAlign: "center",
		color: colors.primary[900],
		fontSize: layout.font.md,
	},

	dissolve: {
		...globalStyles.buttonContainer,
		width: 170,
		backgroundColor: colors.white[200],
		borderColor: colors.warning[700],
		borderWidth: 0.5,
	},

	dissolveText: {
		textAlign: "center",
		color: colors.warning[700],
		fontSize: layout.font.md,
	},
});

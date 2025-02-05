import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { Dimensions, StyleSheet } from "react-native";

const width = Math.floor(Dimensions.get("screen").width);

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width - 60,
		backgroundColor: colors.white[200],
		marginHorizontal: 3,
		borderWidth: 0.1,
		borderRadius: layout.radius.sm,
	},
	container2: {
		flex: 1,
		backgroundColor: colors.white[400],
		marginVertical: 5,
		borderWidth: 0.2,
		borderColor: colors.primary[900],
		borderRadius: layout.radius.sm,
	},
	cardBox: {
		...globalStyles.bgNone,
		flex: 1,
		// gap:10,
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
	actionBox: {
		...globalStyles.bgNone,
	},
	actionText: {},

	amount: {
		fontSize: layout.font.l,
		color: colors.primary[700],
		fontWeight: "600",
	},
});

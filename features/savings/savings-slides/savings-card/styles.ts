import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { Dimensions, StyleSheet } from "react-native";

const width = Math.floor(Dimensions.get("screen").width);

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width-60,
		backgroundColor: colors.white[200],
		marginHorizontal: 3,
		borderWidth: 0.1,
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
	},
	savingsTitleBox: {
		flexGrow: 1,
	},
	savingsTitle: {
		fontSize: layout.font.md,
		color: colors.primary[700],
		fontWeight: "500",
		textTransform: "capitalize",
	},
	savingsComment: {
		fontSize: layout.font.sm,
		color: colors.black[600],
	},

	footerBox: {
		flexDirection: "row",
		// justifyContent: "space-between",
	},

	durationBox: {
		...globalStyles.bgNone,
		flexGrow: 1,
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
	amountBox: {
		...globalStyles.bgNone,
		alignSelf: "flex-end",
	},
	currency: {
		fontSize: layout.font.sm,
		color: colors.black[600],
		fontWeight: "600",
	},
	amount: {
		fontSize: layout.font.md,
		color: colors.primary[700],
		fontWeight: "600",
	},
});

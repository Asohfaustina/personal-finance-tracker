import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		...globalStyles.bgNone,
		height: 180,
		padding: layout.padding.md,
		alignItems: "center",
		gap: 5,
	},

	slidesBox: {
		width: "100%",
		...globalStyles.bgNone,
	},

	dotsBox: {
		...globalStyles.bgNone,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 5,
	},
	dots: {
		borderRadius: "100%",
		backgroundColor: colors.black[400],
		height: layout.height.sm,
		width: layout.width.sm,
	},
	activeDot: {
		backgroundColor: colors.primary[600],
		width: layout.width.md,
		borderRadius: layout.radius.xl,
	},
});

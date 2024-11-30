import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: layout.padding.md,
		paddingVertical: layout.padding.md,
		borderBottomWidth: 0.5,
		borderColor: colors.black[400],
		...globalStyles.bgNone,
	},

	welcomeText: {
		textTransform: "capitalize",
		fontSize: layout.font.md,
		fontWeight: "600",
		color: colors.primary[900],
	},
	name: {
		color: colors.primary[600],
		fontWeight: "700",
	},
	subText: {
		fontSize: layout.font.sm,
	},

	sectionHeaderBox: {
		padding: layout.padding.md,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 0.5,
		borderColor: colors.mute,
		marginBottom: layout.margin.sm,
	},
	sectionHeader: {
		fontSize: layout.font.md,
		fontWeight: "500",
		color: colors.primary[700],
	},
});

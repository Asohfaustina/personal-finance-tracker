import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: layout.padding.md,
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
	},
	iconBox: {
		borderWidth: 0.5,
		borderRadius: "100%",
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	subTitle: {
		fontSize: layout.font.sm,
		color: colors.primary[900],
	},

	categoryBox: {
		backgroundColor: colors.primary[700],
		borderRadius: layout.radius.xl,
		alignItems: "center",
		borderWidth: 0.2,
	},
	categoryText: {
		color: colors.white[200],
		fontSize: layout.font.xs,
		textTransform: "capitalize",
	},
	date: {
		fontSize: layout.font.xs,
		color: colors.black[600],
	},
});

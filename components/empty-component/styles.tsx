import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: layout.padding.md,
	},
	img: {
		width: 150,
		height: 150,
	},
	pill: {
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: layout.padding.md,
		paddingVertical: layout.padding.sm,
		borderRadius: layout.radius.xl,
		backgroundColor: "rgba(7, 121, 29, 0.1)",
	},
	text: {
		color: "rgba(7, 121, 29, 0.9)",
		fontSize: layout.font.md,
		fontWeight: "600",
		letterSpacing: -0.3,
	},
	info: {
		color: colors.mute,
		fontSize: layout.font.md + 2,
		paddingHorizontal: layout.padding.md,
		textAlign: "center",
		marginVertical: layout.margin.md,
	},
	title: {
		fontSize: layout.font.md + 4,
		marginTop: layout.margin.sm + 4,
	},
	hide: {
		display: "none",
	},
});

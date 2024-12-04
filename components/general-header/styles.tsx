import { Platform, StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 4,
		paddingVertical: layout.padding.sm,
		paddingHorizontal: layout.padding.sm + 2,
		...Platform.select({
			android: {
				// paddingTop: layout.padding.l + 10,
			},
		}),
	},
	iconBox: {
		width: 40,
		height: 40,
		borderRadius: layout.radius.xl,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 0.5,
		borderColor: colors.mute,
	},
	title: {
		fontSize: layout.font.md + 4,
		letterSpacing: -0.3,
		color: colors.primary[700],
	},
	hide: {
		width: 40,
		height: 40,
	},
	shadow: {
		...Platform.select({
			android: {
				borderBottomWidth: 0.5,
				borderColor: colors.dim,
			},
			ios: {
				borderBottomWidth: 0.3,
				borderColor: colors.mute,
			},
		}),
	},
});

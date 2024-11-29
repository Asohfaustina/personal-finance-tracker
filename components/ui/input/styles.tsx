import { Platform, StyleSheet } from "react-native";
import { colors, layout } from "@/constants";
export const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginBottom: layout.margin.sm,
		borderWidth: 0.3,
		borderColor: colors.white[400],

		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: layout.padding.sm,
		...Platform.select({
			android: {
				borderRadius: layout.radius.xs + 1,
			},
			ios: {
				borderRadius: layout.radius.sm,
			},
		}),
	},
	inputBox: {
		flex: 1,
		textAlign: "left",
		fontSize: layout.font.md + 2,
		paddingVertical: layout.padding.sm +3,
	},
	pressable: {
		paddingStart: layout.padding.sm,
	},
	disabled: {
		backgroundColor: "rgba(0,0,0,0.01)",
	},
});

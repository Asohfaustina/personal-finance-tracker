import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {},

	todoBox: {
		width: 200,
		backgroundColor: colors.secondary[200],
		padding: layout.padding.sm + 1,
		borderRadius: layout.radius.sm,
		borderWidth: 0.4,
		borderColor: colors.mute,
		marginHorizontal: layout.margin.xs,
	},
	todoTitle: {
		color: colors.primary[700],
		fontWeight: "500",
	},
	todoNote: {
		color: colors.black[600],
		fontSize: layout.font.xs,
	},
});

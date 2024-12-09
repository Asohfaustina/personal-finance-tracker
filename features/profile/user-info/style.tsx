import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		...globalStyles.px,
		paddingVertical: layout.padding.md,
	},
	listBox: {
		borderWidth: 0.5,
		borderColor: colors.mute,
		borderRadius: layout.radius.md,
	},
});

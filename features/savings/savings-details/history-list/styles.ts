import { layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: layout.padding.md,
		...globalStyles.px,
	},
});

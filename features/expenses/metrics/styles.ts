import { colors } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1.5,
	},
	chartHeaderBox: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	chartHeader: {
		...globalStyles.headers,
	},
	actionText: {
		textDecorationLine: "underline",
		fontWeight: 600,
		color: colors.primary[700]
	},
	headerButton: {},
	filterBox: {},
	filterButton: {},
});

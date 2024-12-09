import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		...globalStyles.px,
		paddingTop: layout.margin.xl + 5,
		alignItems: "center",
		gap: 20,
	},
	avatarBox: {
		...globalStyles.bgNone,
		height: 50,
	},
	infoBox: {
		gap: 5,
	},
	name: {
		...globalStyles.headers,
		textTransform: "capitalize",
		textAlign: "center",
	},
	email: {
		color: colors.black[600],
		fontWeight: "500",
		textAlign: "center",
	},
	actionBox: {},
	actionText: {},
});

import { StyleSheet, Platform } from "react-native";
import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";

export const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		borderColor: colors.white[200],
		backgroundColor: colors.white[700],
		zIndex:10
	},
	type1: {
		...Platform.select({
			ios: {
				shadowColor: "rgba(0,0,0,0.3)",
				shadowOffset: {
					width: 0,
					height: -7,
				},
				shadowOpacity: 0.09,
				shadowRadius: 5.84,
			},
			android: {
				elevation: 10,
			},
		}),
		borderTopRightRadius: layout.radius.sm + 10,
		borderTopLeftRadius: layout.radius.sm + 10,
	},
	type2: {
		borderTopWidth: 0.3,
		borderColor: colors.white[200],
	},
	dragBox: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: layout.padding.sm + 6,
		paddingBottom: layout.padding.sm + 6,
		borderTopRightRadius: layout.radius.sm + 4,
		borderTopLeftRadius: layout.radius.sm + 4,
	},
	dragBar: {
		width: 42,
		paddingBottom: layout.padding.xs + 5,
		marginBottom: layout.margin.sm + 6,
		backgroundColor: "rgba(0,0,0,0.15)",
		borderRadius: layout.radius.xl,
	},
	title: {
		...globalStyles.headers,
		paddingBottom: layout.padding.sm,
		fontSize: layout.font.md + 2,
		textTransform: "capitalize",
	},
});



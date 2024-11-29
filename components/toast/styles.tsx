import { colors, layout } from "@/constants";
import { Platform, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		marginTop: layout.margin.md + 8,
	},
	box: {
		padding: layout.padding.md,
	},
	toast: {
		width: "100%",
		borderColor: colors.primary[700],
		borderWidth: 2,
		height: layout.height.xl - 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		backgroundColor: "white",
		borderRadius: layout.radius.l,
		paddingHorizontal: layout.padding.sm + 4,
		...Platform.select({
			ios: {
				shadowColor: "rgba(0,0,0,0.2)",
				shadowOffset: {
					width: 0,
					height: 7,
				},
				shadowOpacity: 0.19,
				shadowRadius: 5.84,
			},
			android: {
				elevation: 5,
			},
		}),
	},
	text: {
		fontSize: layout.font.md,
		flex: 1,
		fontWeight: "500",
	},
	imgBox: {
		width: 30,
		height: 30,
	},
	img: {
		width: "100%",
		height: "100%",
		borderRadius: layout.radius.xl,
	},
});

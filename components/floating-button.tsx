import { Pressable, View } from "react-native";
import { globalStyles } from "@/styles/global.styles";
import { Entypo } from "@expo/vector-icons";
import * as React from "react";

import { colors, layout } from "@/constants";
import { Platform, StyleSheet } from "react-native";

type ButtonProps = {
	action: () => void;
};
export default React.memo(function FloatingButton(props: ButtonProps) {
	const pressed = () => {
		props.action && props.action();
	};

	return (
		<View style={styles.floating}>
			<Pressable onPress={pressed}>
				{({ pressed }) => (
					<View style={[styles.floatingBtn, pressed && globalStyles.pressed]}>
						<Entypo name="plus" size={24} color={"white"} />
					</View>
				)}
			</Pressable>
		</View>
	);
});

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	floating: {
		position: "absolute",
		bottom: 40,
		right: 20,
	},
	floatingBtn: {
		...Platform.select({
			ios: {
				shadowColor: "rgba(0,0,0,0.7)",
				shadowOffset: {
					width: 0,
					height: 7,
				},
				shadowOpacity: 0.09,
				shadowRadius: 5.84,
			},
			android: {
				elevation: 5,
			},
		}),
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: layout.radius.xl,
		zIndex: 1,
		backgroundColor: colors.primary[700],
	},
});

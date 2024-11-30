import { Animated, Pressable, StyleSheet } from "react-native";
import { layout } from "@/constants";
import { useModal } from "./use-modal";
import { View } from "../theme";
import * as React from "react";

type BottomModalProps = {
	children?: React.ReactNode;
	setAnimation: React.Dispatch<React.SetStateAction<Function | null>>;
	close: () => void;
	blockAnimation?: boolean;
};
export function BottomModal(props: BottomModalProps) {
	const { blockAnimation = false } = props;
	const { handleClose, position } = useModal(blockAnimation, props.close, props.setAnimation);

	return (
		<View style={{ flex: 1, position: "relative" }}>
			<Pressable style={styles.press} onPress={handleClose}>
				<View style={styles.container} />
			</Pressable>
			<Animated.View
				style={[
					styles.box,
					{
						transform: [
							{
								translateY: position,
							},
						],
					},
				]}
			>
				{props.children}
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	press: {
		flex: 1,
	},
	container: {
		backgroundColor: "rgba(0,0,0,0.2)",
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: 1,
	},
	box: {
		width: "100%",
		height: 450,
		backgroundColor: "white",
		position: "absolute",
		bottom: 0,
		left: 0,
		borderTopLeftRadius: layout.radius.md,
		borderTopRightRadius: layout.radius.md,
		zIndex: 2,
	},
});

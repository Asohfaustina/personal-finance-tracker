import { Text, View } from "@/components/theme";
import {  layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { Animated, Modal, Pressable, StyleSheet } from "react-native";
import useDissolve from "./use-dissolve";

import { SafeAreaView } from "react-native";

type DissolveProps = {
	open: boolean;
	close: () => void;
};
export default React.memo(function DissolveSavings(props: DissolveProps) {
	const { isLoading, handleClose, handleProceed, scaleAnimValue, fadeAnimValue } = useDissolve(
		props.close,
		props.open
	);
	return (
		<Modal visible={props.open} transparent={true}>
		
			<SafeAreaView style={styles.container}>
				<View style={[styles.box]}>
					<Animated.View
						key={"unique"}
						style={[
							styles.modal,
							{ transform: [{ scale: scaleAnimValue }], opacity: fadeAnimValue },
						]}
					>
						<View style={styles.visual}>
							<AntDesign name="warning" size={34} color="red" />
							<Text style={styles.alertTitle}>Dissolve Savings</Text>
							<Text style={styles.alertBody}>
								Are you sure you want to dissolve savings? this action is irreversible.{" "}
							</Text>
						</View>

						<View style={styles.optionsContainer}>
							<Pressable onPress={handleClose} style={styles.optionBox}>
								{({ pressed }) => (
									<View
										style={[pressed && globalStyles.pressed, isLoading && globalStyles.disabled]}
									>
										<Text style={styles.option}>Close</Text>
									</View>
								)}
							</Pressable>

							<Pressable onPress={handleProceed} style={[styles.optionBox, styles.additional]}>
								{({ pressed }) => (
									<View
										style={[pressed && globalStyles.pressed, isLoading && globalStyles.disabled]}
									>
										<Text style={[styles.option, { color: "red" }]}>Dissolve</Text>
									</View>
								)}
							</Pressable>
						</View>
					</Animated.View>
				</View>
			</SafeAreaView>
		</Modal>
	);
});

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flex: 1,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.3)",
		...globalStyles.px,
	},
	box: {
		marginTop: "70%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: layout.radius.md,
	},
	modal: {
		maxWidth: 400,
		width: "100%",
		backgroundColor: "white",
		borderRadius: layout.radius.sm,
		paddingVertical: layout.padding.sm,
	},
	optionsContainer: {
		flexDirection: "row",
	},
	optionBox: {
		padding: 15,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	option: {
		fontSize: layout.font.sm + 2,
	},
	visual: {
		borderBottomWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
		padding: layout.padding.sm,
		alignItems: "center",
	},
	alertTitle: {
		marginTop: layout.margin.xs,
		...globalStyles.headers,
	},
	alertBody: {
		fontSize: layout.font.sm + 2,
		textAlign: "center",
		marginTop: layout.margin.xs,
	},
	loading: {
		alignItems: "center",
		width: 30,
		height: 30,
		borderRadius: layout.radius.xs,
		justifyContent: "center",
		backgroundColor: "white",
	},
	additional: {
		borderStartWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
	},
});

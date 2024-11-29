import { Pressable, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import * as React from "react";
import { Text, View } from "@/components/theme";

type BaseButtonProps = {
	title: string;
	press?: Function;
	disabled?: boolean;
	width?: number | "100%";
	showSpinner?: boolean;
};

export default React.memo(function BaseButton(props: BaseButtonProps) {
	const { press, title, disabled = false, width = 250, showSpinner = false } = props;
	const handlePress = () => {
		if (disabled) return;
		press && press();
	};
	return (
		<Pressable onPress={handlePress}>
			{({ pressed }) => (
				<View
					style={[
						styles.container,
						pressed && globalStyles.pressed,
						{ width, minWidth:width },
						disabled && globalStyles.disabled,
					]}
				>
					{showSpinner && disabled ? (
						<ActivityIndicator />
					) : (
						<Text style={styles.text}>{title}</Text>
					)}
				</View>
			)}
		</Pressable>
	);
});

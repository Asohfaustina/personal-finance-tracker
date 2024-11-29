import * as React from "react";

import { TextInput, Pressable, KeyboardTypeOptions, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import { View } from "@/components/theme";

type InputProps = {
	style?: StyleProp<ViewStyle>;
	placeholder?: string;
	isLoading?: boolean;
	type?: "text" | "password";
	value?: string;
	onChange?: (value: string) => void;
	keyboardType?: KeyboardTypeOptions;
};

export default React.memo(function Input(props: InputProps) {
	const {
		placeholder = "placeholder",
		type = "text",
		isLoading = false,
		value,
		onChange,
		keyboardType,
	} = props;
	const [show, setShow] = React.useState(!false);
	return (
		<View style={[styles.container, props.style, isLoading && styles.disabled]}>
			<TextInput
				placeholder={placeholder}
				style={styles.inputBox}
				autoCapitalize="none"
				onChangeText={onChange}
				textContentType="none"
				value={value}
				autoCorrect={false}
				editable={isLoading ? false : true}
				secureTextEntry={type === "text" ? false : show}
				keyboardType={keyboardType}
			/>
			{type === "password" && (
				<Pressable onPress={() => setShow((prev) => !prev)} style={styles.pressable}>
					{({ pressed }) => (
						<View style={[pressed && globalStyles.pressed]}>
							<Ionicons name={show ? "eye-off-outline" : "eye-outline"} size={20} color="black" />
						</View>
					)}
				</Pressable>
			)}
		</View>
	);
});

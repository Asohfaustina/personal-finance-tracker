import { Pressable,  } from "react-native";
import { View } from "./theme";
import { globalStyles } from "@/styles/global.styles";
import { ViewProps } from "./theme/view";

type AppButtonProps = ViewProps & {
	press: () => void;
	disabled?: boolean;
};
export function AppButton(props: AppButtonProps) {
	return (
		<Pressable onPress={props.press} disabled={props.disabled}>
			{({ pressed }) => (
				<View
					style={[
						pressed && globalStyles.pressed,
						props.disabled && globalStyles.disabled,
						props.style,
					]}
				>
					{props.children}
				</View>
			)}
		</Pressable>
	);
}

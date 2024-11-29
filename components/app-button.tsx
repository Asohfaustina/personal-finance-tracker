import { Pressable,  } from "react-native";
import { View } from "./theme";
import { globalStyles } from "@/styles/global.styles";
import { ViewProps } from "./theme/view";

type AppButtonProps = ViewProps & {
  press: () => void;
};
export function AppButton(props: AppButtonProps) {
  return (
    <Pressable onPress={props.press}>
      {({ pressed }) => (
        <View style={[pressed && globalStyles.pressed, props.style]}>{props.children}</View>
      )}
    </Pressable>
  );
}

import { SafeAreaView as DefaultSafeAreaView, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type SafeAreaViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function SafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: SafeAreaViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

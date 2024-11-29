import { View as DefaultView, type ViewProps as DefaultViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ViewProps = DefaultViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function View({ style, lightColor, darkColor, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

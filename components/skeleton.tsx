import { Animated, ViewStyle } from "react-native";
import { layout } from "@/constants";
import * as React from "react";

type SkeletonProps = {
  width?: ViewStyle["width"]
  height?: ViewStyle["height"]
  backgroundColor?: ViewStyle["backgroundColor"]
  borderRadius?: ViewStyle["borderRadius"]
}
export function Skeleton({
  height = 200,
  width = "100%",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
  borderRadius = layout.radius.s
}: SkeletonProps) {
  const opacity = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        width,
        height,
        opacity,
        backgroundColor,
        borderRadius
      }}
    />
  )
}

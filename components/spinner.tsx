import { Image, Animated } from "react-native";
import { assets } from "@/constants";
import React from "react";

type SpinnerProps = {
  size?: number
}
export function Spinner({ size = 30 }: SpinnerProps) {
  const rotation = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const style = rotation.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"]
  });

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, { toValue: 100, useNativeDriver: true, duration: 800 }),
      { iterations: -1 }
    ).start();
  }, []);
  return (
    <Animated.View style={{ transform: [{ rotate: style }] }}>
      <Image
        source={assets.spinner}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </Animated.View>
  )
}

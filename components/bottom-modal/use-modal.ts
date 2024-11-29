import { Animated } from "react-native";
import * as React from "react";

export function useModal(
  blockAnimation: boolean,
  close: Function,
  setAnimation: (cb: Function) => void
) {
  const [time, setTime] = React.useState<NodeJS.Timeout | null>(null)
  const position = React.useRef(new Animated.Value(450)).current;

  const animation = (point: "up" | "down") => {
    return new Promise((resolve) => {
      Animated.spring(position, {
        useNativeDriver: true,
        toValue: point === "up" ? 50 : 450
      }).start(() => resolve(true));
    });
  }

  const handleClose = async () => {
    if (blockAnimation) return
    animation("down");
    const timeout = setTimeout(() => {
      close();
    }, 200);
    setTime(timeout);
  }

  React.useEffect(() => {
    setAnimation(() => handleClose);
    const timeout = setTimeout(() => {
      animation("up");
    }, 100);
    return () => {
      clearTimeout(timeout);
      time && clearTimeout(time);
    }
  }, []);

  return {
    handleClose,
    animation,
    position
  }
}

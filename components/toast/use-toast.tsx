import { Animated } from "react-native";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleToast } from '@/store/ui-slice';
import * as React from 'react';

export default function useToast() {
  const { toastMsg, showToast } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const fadeAnimValue = React.useRef(new Animated.Value(0)).current;
  const moveAnimValue = React.useRef(new Animated.Value(-10)).current;

  const animateToast = (type: "fadeIn" | "fadeOut") => {
    if (!["fadeIn", "fadeOut"].includes(type)) throw new Error("invalid type");
    Animated.parallel([
      Animated.timing(fadeAnimValue, {
        toValue: type === "fadeIn" ? 1 : 0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(moveAnimValue, {
        toValue: type === "fadeIn" ? 0 : -10,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }

  const pressed = () => {
    animateToast("fadeOut")
    setTimeout(() => {
      dispatch(toggleToast({ show: false }));
    }, 500);
  }

  React.useEffect(() => {
    animateToast("fadeIn");
  }, []);

  React.useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => {
      pressed();
    }, 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  return { toastMsg, pressed, animateToast, moveAnimValue, fadeAnimValue }
}



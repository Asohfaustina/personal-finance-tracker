import { Animated } from "react-native";
import * as React from 'react';

export default function useModalContainer(closeModal: Function, action?: Function | undefined) {
  const scaleAnimValue = React.useRef(new Animated.Value(0.9)).current;
  const fadeAnimValue = React.useRef(new Animated.Value(0)).current;

  const animateModal = (type: "fadeIn" | "fadeOut") => {
    if (!["fadeIn", "fadeOut"].includes(type))
      throw new Error("invalid type");
    Animated.parallel([
      Animated.timing(fadeAnimValue, {
        toValue: type === "fadeIn" ? 1 : 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnimValue, {
        toValue: type === "fadeIn" ? 1 : 0.9,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }

  const handleClose = () => {
    animateModal("fadeOut");
    setTimeout(() => {
      closeModal();
    }, 200)
  }

  const handleProceed = () => {
    animateModal("fadeOut");
    setTimeout(() => {
      closeModal();
      action && action();
    }, 300);
  }

  React.useEffect(() => {
    animateModal("fadeIn");
  }, []);

  return { handleClose, handleProceed, scaleAnimValue, fadeAnimValue, animateModal }
}



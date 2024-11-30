import { Animated, Text, SafeAreaView, View, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./style";
import { globalStyles } from "@/styles/global.styles";
import * as React from 'react';
import useModalContainer from "./use-modal-container";

type ModalContainerProps = {
  closeModal: Function
  action?: Function
  title: string
  body: string
  closeTitle: string
  proceedTitle: string
  proceedTitleType?: "default" | "destructive"
  isLoading?: boolean
}

export default React.memo(function ModalContainer({
  action,
  closeModal,
  body,
  closeTitle,
  proceedTitle,
  title,
  proceedTitleType = "default"
}: ModalContainerProps) {
  const {
    fadeAnimValue,
    handleClose,
    handleProceed,
    scaleAnimValue
  } = useModalContainer(closeModal, action);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Animated.View key={"unique"} style={[styles.modal, { transform: [{ scale: scaleAnimValue }], opacity: fadeAnimValue }]}>
          <View style={styles.visual}>
            <AntDesign name="warning" size={34} color="black" />
            <Text style={styles.alertTitle}>{title}</Text>
            <Text style={styles.alertBody}>{body}</Text>
          </View>

          <View style={styles.optionsContainer}>
            <Pressable onPress={handleClose} style={styles.optionBox}>
              {({ pressed }) => (
                <View style={[pressed && globalStyles.pressed]}>
                  <Text style={styles.option}>{closeTitle}</Text>
                </View>
              )}
            </Pressable>

            <Pressable onPress={handleProceed} style={[styles.optionBox, styles.additional]}>
              {({ pressed }) => (
                <View style={[pressed && globalStyles.pressed]}>
                  <Text style={[styles.option, { color: proceedTitleType === "default" ? "blue" : "red" }]}>
                    {proceedTitle}
                  </Text>
                </View>
              )}
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
});



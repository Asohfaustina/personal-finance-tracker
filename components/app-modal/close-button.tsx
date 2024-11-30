import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import * as React from 'react';

type CloseButtonProps = {
  handleClose: () => void
  title: string
}
export function CloseButton(props: CloseButtonProps) {
  return (
    <Pressable onPress={props.handleClose} style={styles.optionBox}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.5 : 1 }}>
          <Text style={styles.option}>{props.title}</Text>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  optionBox: {
    padding: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  option: {
    fontSize: layout.font.sm
  }
});

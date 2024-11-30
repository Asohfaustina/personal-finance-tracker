import { Text, View, Pressable, ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import * as React from 'react';

type ActionButtonProps = {
  proceed: () => void
  isLoading: boolean
  type: string
  title: string
}
export function ActionButton(props: ActionButtonProps) {
  return (
    <Pressable
      onPress={props.proceed}
      disabled={props.isLoading && true}
      style={[styles.optionBox, styles.additional]}
    >
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.5 : 1 }}>
          <Text style={[
            styles.option,
            { color: props.type === "default" ? "blue" : "red" }
          ]}>
            {props.isLoading ? (
              <ActivityIndicator />
            ) : props.title}
          </Text>
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
		justifyContent: "center",
	},
	option: {
		fontSize: layout.font.sm,
	},
	additional: {
		borderStartWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
	},
});

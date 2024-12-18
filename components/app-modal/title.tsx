import { Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import * as React from 'react';

type TitleProps = {
  title: string
  message: string
}
export function Title(props: TitleProps) {
  return (
    <View style={styles.visual}>
      <AntDesign name="warning" size={34} color="black" />
      <Text style={styles.alertTitle} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.alertBody} numberOfLines={2}>
        {props.message}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
	visual: {
		borderBottomWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
		padding: layout.padding.md,
		alignItems: "center",
	},
	alertTitle: {
		fontSize: layout.font.md - 6,
		marginTop: layout.margin.sm,
	},
	alertBody: {
		fontSize: layout.font.sm,
		textAlign: "center",
		marginTop: layout.margin.sm,
	},
});

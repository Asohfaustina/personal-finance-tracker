import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { assets } from "@/constants";
import { globalStyles } from "@/styles/global.styles";

type EmptyComponentProps = {
  title?: string
  body?: string
  retry?: Function
  img?: string
}

export default React.memo(function EmptyComponent(props: EmptyComponentProps) {
  const {
    body = "You don't have any data currently, you can try again later or add more.",
    title = "No Data Currently",
    retry,
    img = assets.empty
  } = props;

  const pressed = () => {
    retry && retry();
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{body}</Text>
      <Pressable style={[!retry && styles.hide]} onPress={pressed}>
        {({ pressed }) => (
          <View style={[styles.pill, pressed && globalStyles.pressed]}>
            <Text style={styles.text}>Try Again</Text>
          </View>
        )}
      </Pressable>
    </View>
  )
});


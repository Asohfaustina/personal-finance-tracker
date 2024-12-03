import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import * as React from "react";
import ensureError from "@/lib/ensure-error";

type ErrorComponentProps = {
  error: Error | unknown
  retry?: Function
}

export default React.memo(function ErrorComponent({ error, retry = () => null }: ErrorComponentProps) {
  const [err, setErr] = React.useState(new Error("error occurred"));

  React.useLayoutEffect(() => {
    const transformed = ensureError(error);
    setErr(transformed);
  }, [error]);

  return (
    <View style={[styles.container]}>
      <Ionicons name="alert-circle-outline" size={25} color={"red"} />
      <Text style={styles.title}>Error: {err.message}</Text>
      <Text style={styles.sub}>Please try again.</Text>
      <Pressable onPress={() => retry()}>
        {({ pressed }) => (
          <View style={[pressed && globalStyles.pressed, styles.pill]}>
            <Text style={styles.again}>Try Again</Text>
          </View>
        )}
      </Pressable>
    </View>

  )
});


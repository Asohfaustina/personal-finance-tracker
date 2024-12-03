import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import * as React from 'react';
import { colors } from "@/constants";

type _PasswordInputProps = {
  title?: string
  placeholder?: string
  isError?: boolean
  errorMg?: string
  onChangeText?: (val: string) => void
  isLoading?: boolean
  value?: string
}

export default React.memo(function TextArea({
  title,
  placeholder,
  isError,
  errorMg,
  onChangeText,
  isLoading,
  value
}: _PasswordInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>{title ?? "Label"}</Text>
      <View style={styles.textBox}>
        <TextInput
          style={styles.input}
          textAlignVertical="top"
          placeholder={placeholder ?? "Placeholder"}
          placeholderTextColor={colors.mute}
          onChangeText={onChangeText}
          editable={!isLoading}
          value={value}
          multiline
          textContentType="none"
        />
      </View>
      {
        isError &&
        <Text style={styles.error}>{errorMg ?? "Error Occured"}</Text>
      }
    </View>
  )
});




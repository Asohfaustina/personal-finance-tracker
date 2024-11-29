import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputKeyPressEventData
} from "react-native";
import * as React from 'react';

const RE_DIGIT = new RegExp(/^\d+$/);

export default function useOTPInput(value: string, valueLength: number, setValue: Function) {
  const valueItems = React.useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];
    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      if (RE_DIGIT.test(char)) items.push(char);
      else items.push('');
    }
    return items;
  }, [value, valueLength]);

  let boxes: TextInput[] = []

  const onInputChange = (text: string, idx: number) => {
    let targetValue = text;
    const isTargetValueDigit = RE_DIGIT.test(text);
    if (!isTargetValueDigit && targetValue !== '') return;

    targetValue = isTargetValueDigit ? text : ' ';
    const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
    setValue(newValue);

    if (!isTargetValueDigit) return;

    const nextElementSibling = boxes[idx + 1];
    if (nextElementSibling) {
      nextElementSibling.focus()
    }
    if (targetValue.length === valueLength) {
      setValue(targetValue);
      boxes[idx].blur()
    }
  }

  const inputOnKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    idx: number
  ) => {
    const key = e.nativeEvent.key;
    const isTargetValueDigit = RE_DIGIT.test(key);
    const selected = boxes[idx];
    selected.setNativeProps({ selection: { start: 0, end: key.length } })

    if (key !== 'Backspace' || isTargetValueDigit) return
    const previousElementSibling = boxes[idx - 1]
    if (previousElementSibling) previousElementSibling.focus();
  };

  const inputOnFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
    idx: number
  ) => {
    const key = e.nativeEvent.text;
    const selected = boxes[idx];
    selected.setNativeProps({ selection: { start: 0, end: key?.length } })
  };

  return {
    valueItems, onInputChange, inputOnKeyPress, inputOnFocus, boxes
  }
}




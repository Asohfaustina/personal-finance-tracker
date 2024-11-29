import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons';
import ModalBox from "./modal";
import * as React from "react";

type SelectBoxProps = {
  label: string
  items: { title: string; value: string }[]
  onchange?: (val: string) => void
  value?: string
}

export default React.memo(function SelectBox(props: SelectBoxProps) {
  const {
    onchange = (val: string) => null,
    items: options,
    label = "Select Box"
  } = props;
  const [show, setShow] = React.useState(false);
  const [current, setCurrent] = React.useState(props.value ?? "");

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={styles.box}>
            <Text style={[styles.text, !current.trim() && { color: "rgba(0,0,0,0.22)" }]}>
              {
                options.find((item) => {
                  return item.value === current
                })?.title ?? `Select ${label}`
              }
            </Text>
            <Entypo name="select-arrows" size={18} color="rgba(0,0,0,0.23)" />
          </View>
        </TouchableOpacity>

      </View>

      <ModalBox
        options={options}
        setItem={setCurrent}
        item={current}
        setShow={setShow}
        key={label}
        onchange={onchange}
        show={show}
        label={label}
      />
    </React.Fragment>
  )
});




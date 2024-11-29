import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import * as React from "react";

type ModalBoxProps = {
  options: { title: string; value: string }[]
  show: boolean
  setItem: (val: string) => void
  item: string
  label: string
  onchange?: (val: string) => void
  setShow: (val: boolean) => void
}

export default React.memo(function ModalBox(props: ModalBoxProps) {
  const {
    item: current,
    setItem,
    show,
    label,
    options,
    onchange,
    setShow
  } = props;

  const closeModal = () => {
    setShow(false);
  }

  const handleSelect = (val: string) => {
    onchange && onchange(val);
    setItem(val);
    closeModal();
  }

  return (
    <Modal visible={show} style={styles.modal} animationType="slide" presentationStyle="formSheet">
      <SafeAreaView style={styles.modal}>
        <View style={styles.header}>
          <TouchableOpacity onPress={closeModal}>
            <AntDesign name="closecircleo" size={20} />
          </TouchableOpacity>

          <Text style={styles.headerText}>
            Select {label}
          </Text>

          <Text style={styles.hidden}>Back</Text>
        </View>
        <FlatList
          data={options}
          keyExtractor={(item, idx) => `${idx.toString()} ${item.value}`}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item.value)}
              key={index}>
              <Text style={styles.itemText}>
                {item.title}
              </Text>
              {
                item.value === current &&
                <AntDesign name="check" size={20} />
              }
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </Modal>
  )
});


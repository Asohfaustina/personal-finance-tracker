import { Pressable, Animated, Text, SafeAreaView, View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '@/styles/global.styles';
import { assets } from '@/constants';
import { styles } from './styles';
import * as React from 'react';
import capitalize from '@/lib/capitalize';
import useToast from "./use-toast";

export default React.memo(function ToastComponent() {
  const { pressed, toastMsg, fadeAnimValue, moveAnimValue } = useToast();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Animated.View key={"unique"}
          style={[styles.toast, { transform: [{ translateY: moveAnimValue }], opacity: fadeAnimValue }]}>
          <View style={styles.imgBox}>
            <Image source={assets.logo} style={styles.img} resizeMode="contain" />
          </View>
          <Text style={styles.text}>{capitalize(toastMsg)}</Text>
          <Pressable onPress={pressed}>
            {({ pressed }) => (
              <View style={[pressed && globalStyles.pressed]}>
                <AntDesign name="closecircleo" size={24} />
              </View>
            )}
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
});



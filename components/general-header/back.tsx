import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "@/styles/global.styles";
import { styles } from "./styles";

import * as React from "react";
import { router } from "expo-router";

type BackProps = {
	show?: boolean;
};

export default React.memo(function Back({ show }: BackProps) {
	const pressed = () => {
		return router.back();
	};

	if (!show) return <View style={styles.hide} />;
	return (
		<Pressable onPress={pressed}>
			{({ pressed }) => (
				<View style={[styles.iconBox, pressed && globalStyles.pressed]}>
					<AntDesign name="arrowleft" size={24} color={"black"} />
				</View>
			)}
		</Pressable>
	);
});

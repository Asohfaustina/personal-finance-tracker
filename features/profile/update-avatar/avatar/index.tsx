import { MaterialIcons } from "@expo/vector-icons";
import { ImageSourcePropType, View } from "react-native";
import { styles } from "./styles";
import * as React from "react";
import AppImg from "@/components/app-img";


type AvatarProps = {
	source?: ImageSourcePropType | null | string;
	size?: number;
	showBadge?: boolean;
};

export default React.memo(function Avatar(props: AvatarProps) {
	const { source, size = 100, showBadge = true } = props;
	const imgSize = { width: size, height: size };

	return (
		<View style={[styles.container, imgSize]}>
			<AppImg source={source ?? undefined} resizeMode="cover" circle={true} style={styles.img} />
			{showBadge && (
				<View style={styles.verified}>
					<MaterialIcons name="verified" size={25} color={"blue"} />
				</View>
			)}
		</View>
	);
});

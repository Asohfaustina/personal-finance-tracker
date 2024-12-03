import { ActivityIndicator, Image, ImageProps, ImageSourcePropType, StyleProp } from "react-native";

import { styles } from "./styles";
import { layout } from "@/constants";
import * as React from "react";
import useAppImage from "./use-app-img";
import { View } from "../theme";
import { ViewProps } from "../theme/view";

type AppImageProps = ImageProps & {
	size?: number;
	source?: ImageSourcePropType | string | null | undefined;
	circle?: boolean;
	containerStyle: StyleProp<ViewProps>;
};

export default React.memo(function AppImage(props: AppImageProps) {
	const { size = 100, style, source, containerStyle, circle = false, ...rest } = props;
	const { sizing, isLoading, img } = useAppImage(size, source);

	return (
		<View style={[styles.container, sizing, containerStyle]}>
			{isLoading && (
				<View style={[styles.loading, circle && { borderRadius: layout.radius.xl }]}>
					<ActivityIndicator />
				</View>
			)}
			<Image {...rest} style={[sizing, style]} source={img} />
		</View>
	);
});

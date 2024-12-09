import { ImagePickerAsset, launchImageLibraryAsync, MediaType } from "expo-image-picker";
import { TouchableOpacity, View, ActivityIndicator } from "react-native";
import { useAppDispatch } from "@/store/hooks";

import { styles } from "./styles";
import Avatar from "../avatar";
import * as React from "react";
import useActions from "@/store/actions";

type ImageSelectorProps = {
	disabled: boolean;
	setCurrent: React.Dispatch<React.SetStateAction<ImagePickerAsset | null>>;
	size?: number;
	userImg?: string | null;
	verified?: boolean;
};

export default React.memo(function ImageSelector({
	disabled,
	setCurrent,
	userImg,
	size = 100,
	verified = false,
}: ImageSelectorProps) {
	const [isLoading, setIsLoading] = React.useState(false);
	const [img, setImg] = React.useState<ImagePickerAsset | null>(
		userImg ? { uri: userImg, width: 100, height: 100 } : null
	);
	const { ui } = useActions();
	const dispatch = useAppDispatch();

	const mediaTypes: MediaType[] = ["images"];

	const handleSelectImg = async () => {
		if (disabled) return;
		setIsLoading(true);
		let result = await launchImageLibraryAsync({
			mediaTypes: mediaTypes,
			allowsEditing: false,
			base64: true,
			quality: 1,
		});
		setIsLoading(false);
		if (result.canceled) return;
		const item = result.assets[0];
		if (item.fileSize! > 1024000)
			return dispatch(ui.toggleToast({ show: true, msgs: "file too large" }));
		setIsLoading(false);
		setImg(item);
		setCurrent(item);
	};

	return (
		<TouchableOpacity onPress={handleSelectImg}>
			<View style={[styles.img, { width: size, height: size }]}>
				{isLoading && (
					<View style={[styles.actualImg, styles.loading]}>
						<ActivityIndicator />
					</View>
				)}
				<Avatar size={size} source={img} showBadge={verified} />
			</View>
		</TouchableOpacity>
	);
});

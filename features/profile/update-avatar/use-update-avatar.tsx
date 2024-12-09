import ensureError from "@/lib/ensure-error";
import uploadAvatar from "@/services/account/upload-avatar";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import { ImagePickerAsset } from "expo-image-picker";
import * as React from "react";

export default function useUpdateAvatar() {
	const { user } = useAppSelector((state) => state.account);
	const [isLoading, setIsLoading] = React.useState(false);
	const [current, setCurrent] = React.useState<ImagePickerAsset | null>(null);
    const { ui, account } = useActions();
    
	const updateAvatar = async () => {
		if (isLoading || !user._id) return;
		if (!current) return ui.toggleToast({ msgs: "no file selected", show: true });
		setIsLoading(true);

		try {
			const response = await uploadAvatar({
				userId: user._id,
				imgData: "data:image/jpeg;base64," + current.base64,
				imgSize: current.fileSize!,
				imgMimetype: "image/jpeg",
			});
			account.updateUser({ avatar: response.avatar });
			ui.toggleToast({ msgs: "Avatar updated", show: true });
		} catch (err) {
			const errMsg = ensureError(err).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	return {
		user,
		setCurrent,
		updateAvatar,
		current,
		isLoading,
	};
}

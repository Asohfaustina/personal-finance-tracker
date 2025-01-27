import ensureError from "@/lib/ensure-error";
import updateAvatar from "@/services/account/update-avatar";
import uploadAvatar from "@/services/account/upload-avatar";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import { Uploads } from "@/types/uploads";
import { User } from "@/types/user";
import { ImagePickerAsset } from "expo-image-picker";
import * as React from "react";

export default function useUpdateAvatar() {
	const { user } = useAppSelector((state) => state.account);
	const [isLoading, setIsLoading] = React.useState(false);
	const [current, setCurrent] = React.useState<ImagePickerAsset | null>(null);
	const { ui, account } = useActions();

	const click = async () => {
		if (isLoading || !user._id) return;
		if (!current) return ui.toggleToast({ msgs: "no file selected", show: true });
		setIsLoading(true);

		try {
			let response: Uploads;
			if (user.avatar?._id) {
				response = await updateAvatar({
					id: user.avatar._id,
					userId: user._id,
					fileData: "data:image/jpeg;base64," + current.base64,
					fileSize: current.fileSize!,
					fileMimetype: "image/jpeg",
				});
			} else {
				response = await uploadAvatar({
					userId: user._id,
					fileData: "data:image/jpeg;base64," + current.base64,
					fileSize: current.fileSize!,
					fileMimetype: "image/jpeg",
				});
			}
			account.updateUser({ avatar: response });
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
		updateAvatar: click,
		current,
		isLoading,
	};
}

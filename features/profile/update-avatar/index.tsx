import { Text, View } from "@/components/theme";
import useUpdateAvatar from "./use-update-avatar";
import { styles } from "./styles";
import ImageSelector from "./image-selector";
import BaseButton from "@/components/ui/base-button";
import * as React from "react";

export default function () {
	const { user, isLoading, setCurrent, updateAvatar } = useUpdateAvatar();
	const avatar = React.useMemo(() => {
		return user.avatar ? String(user.avatar) : null;
	}, [user.avatar]);

	const isVerified = React.useMemo(() => {
		return user.isEmailVerified;
	}, [user.avatar]);
	return (
		<View style={styles.container}>
			<View style={styles.avatarBox}>
				<ImageSelector
					userImg={avatar}
					size={30}
					setCurrent={setCurrent}
					disabled={isLoading}
					verified={isVerified}
				/>
			</View>
			<View style={styles.infoBox}>
				<Text style={styles.name}>{user.name}</Text>
				<Text style={styles.email}>{user.email}</Text>
			</View>

			<BaseButton press={updateAvatar} title="Upload" disabled={isLoading} showSpinner />
		</View>
	);
}

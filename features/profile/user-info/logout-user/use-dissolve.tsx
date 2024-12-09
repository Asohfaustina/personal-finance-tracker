import { Animated } from "react-native";
import * as React from "react";
import ensureError from "@/lib/ensure-error";
import useActions from "@/store/actions";
import { router } from "expo-router";
import logoutAccount from "@/services/account/logout-account";
import { User } from "@/types/user";

export default function useLogout(close: Function, open: boolean) {
	const [isLoading, setIsLoading] = React.useState(false);
	const { ui, root, account } = useActions();

	const scaleAnimValue = React.useRef(new Animated.Value(0.9)).current;
	const fadeAnimValue = React.useRef(new Animated.Value(0)).current;

	const animateModal = (type: "fadeIn" | "fadeOut") => {
		if (!["fadeIn", "fadeOut"].includes(type)) throw new Error("invalid type");
		Animated.parallel([
			Animated.timing(fadeAnimValue, {
				toValue: type === "fadeIn" ? 1 : 0,
				duration: 200,
				useNativeDriver: true,
			}),
			Animated.timing(scaleAnimValue, {
				toValue: type === "fadeIn" ? 1 : 0.9,
				duration: 200,
				useNativeDriver: true,
			}),
		]).start();
	};

	const logout = () => {
		account.changeAccountState({
			user: {} as User,
			refreshToken: "",
			authToken: "",
			expiresAt: 0,
		});
		root.changeIsLoggedIn(false);
	};
	const handleClose = () => {
		if (isLoading) return;
		animateModal("fadeOut");
		close();
	};

	const handleProceed = async () => {
		setIsLoading(true);
		try {
			await logoutAccount();
			logout();
			ui.toggleToast({ msgs: "account logged out", show: true });
			animateModal("fadeOut");
			close();
			router.replace("/");
		} catch (err) {
			const errMsg = ensureError(err).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		animateModal("fadeIn");
	}, [open]);

	return { isLoading, handleClose, handleProceed, scaleAnimValue, fadeAnimValue };
}

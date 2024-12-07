import { Animated } from "react-native";
import * as React from "react";
import ensureError from "@/lib/ensure-error";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import dissolveSavings from "@/services/savings/dissolve-savings";
import { router } from "expo-router";

export default function useDissolve(close: Function, open: boolean) {
	const { details } = useAppSelector((state) => state.savings);
	const [isLoading, setIsLoading] = React.useState(false);
	const { ui, savings } = useActions();

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

	const handleClose = () => {
		if (isLoading) return;
		animateModal("fadeOut");
		close();
	};

	const handleProceed = async () => {
		if (!details?._id) return;
		setIsLoading(true);
		try {
			await dissolveSavings(details._id);
			savings.dissolveSavings(details._id);
			ui.toggleToast({ msgs: "Savings dissolved successfully", show: true });

			animateModal("fadeOut");
			close();
			router.replace("/(root)/(main)/(tabs)/savings");
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

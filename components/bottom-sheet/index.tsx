import * as React from "react";
import { Animated, View, Dimensions, PanResponder, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

type BottomSheetProps = {
	children?: React.ReactNode[] | React.ReactNode;
	style?: StyleProp<ViewStyle>;
	max?: number;
	min?: number;
	title?: string;
	threshold?: number;
	type?: "1" | "2";
};

export default React.memo(function BottomSheet(props: BottomSheetProps) {
	const { threshold = 70, title, type = "1", children, max = 0.85, min = 0.3, style } = props;
	const animatedValue = React.useRef(new Animated.Value(0)).current;
	const lastGestureDy = React.useRef(0);

	const screenHeight = Dimensions.get("window").height;
	const maxHeight = screenHeight * max;
	const minHeight = screenHeight * min;
	const maxUpwardTranslateY = minHeight - maxHeight;
	const maxDownwardTranslateY = 0;
	const dragThreshold = threshold;

	const responder = React.useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				animatedValue.setOffset(lastGestureDy.current);
			},
			onPanResponderMove: (_, gesture) => {
				animatedValue.setValue(gesture.dy);
			},
			onPanResponderRelease: (_, gesture) => {
				animatedValue.flattenOffset();
				lastGestureDy.current += gesture.dy;

				if (lastGestureDy.current < maxUpwardTranslateY)
					lastGestureDy.current = maxUpwardTranslateY;
				else if (lastGestureDy.current > maxDownwardTranslateY)
					lastGestureDy.current = maxDownwardTranslateY;

				if (gesture.dy > 0) {
					if (gesture.dy <= dragThreshold) springAnimation("up");
					else springAnimation("down");
				} else {
					if (gesture.dy >= dragThreshold) springAnimation("down");
					else springAnimation("up");
				}
			},
		})
	).current;

	const springAnimation = (direction: "up" | "down") => {
		if (direction === "down" && lastGestureDy.current === maxDownwardTranslateY) return;
		if (direction === "up" && lastGestureDy.current === maxUpwardTranslateY) return;
		lastGestureDy.current = direction === "down" ? maxDownwardTranslateY : maxUpwardTranslateY;
		Animated.spring(animatedValue, {
			useNativeDriver: true,
			toValue: lastGestureDy.current,
		}).start();
	};

	const animation = {
		transform: [
			{
				translateY: animatedValue.interpolate({
					inputRange: [maxUpwardTranslateY, maxDownwardTranslateY],
					outputRange: [maxUpwardTranslateY, maxDownwardTranslateY],
					extrapolate: "clamp",
				}),
			},
		],
	};

	React.useEffect(() => {
		if (min > 0) springAnimation("up");
		else springAnimation("down");
	}, [min]);

	return (
		<Animated.View
			style={[
				styles.container,
				style,
				animation,
				{ height: maxHeight, bottom: minHeight - maxHeight },
				type === "1" && styles.type1,
				type === "2" && styles.type2,
			]}
		>
			<View style={styles.dragBox} {...responder.panHandlers}>
				<View style={styles.dragBar} />
				{title && <Text style={styles.title}>{title}</Text>}
			</View>
			{children}
		</Animated.View>
	);
});







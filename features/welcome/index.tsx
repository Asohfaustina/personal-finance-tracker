import { SafeAreaView, Text, View } from "@/components/theme";
import { globalStyles } from "@/styles/global.styles";
import * as React from "react";
import { Animated, Dimensions, Image, PanResponder, ScrollView } from "react-native";
import { styles } from "./styles";
import { data } from "./data";
import Dots from "./dots";
import { AppButton } from "@/components/app-button";
import { Redirect, router } from "expo-router";
import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";

const width = Dimensions.get("screen").width;

export default React.memo(function Welcome() {
	const { isOnboarded } = useAppSelector((state) => state.root);
	const [current, setCurrent] = React.useState(0);
	const scrollRef = React.useRef<ScrollView | null>(null);
	const position = React.useRef(new Animated.Value(0)).current;
	const { root } = useActions();
	const slideCount = data.length;
	
	console.log(isOnboarded);
	if (isOnboarded) return <Redirect href={"/"} />;

	const navigate = (type: "login" | "signUp") => {
		if (type === "login") {
			root.changeIsOnboarded(true);
			return router.replace("/");
		}
		root.changeIsOnboarded(true);
		return router.replace("/(root)/sign-up");
	};

	const press = () => {
		if (current < slideCount - 1) {
			scrollRef.current?.scrollTo({ x: (current + 1) * width });
			setCurrent((prev) => prev + 1);
		} else return navigate("signUp");
	};

	const skip = () => {
		if (current === slideCount - 1) {
			return navigate("login");
		}
		scrollRef.current?.scrollTo({ x: (slideCount - 1) * width });
		setCurrent(slideCount - 1);
	};

	const panResponder = React.useMemo(
		() =>
			PanResponder.create({
				onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > Math.abs(gesture.dy),
				onPanResponderMove: (_, gestureState) => position.setValue(gestureState.dx),
				onPanResponderRelease: (_, gestureState) => {
					if (gestureState.dx > 50 && current > 0) {
						//swipe right
						scrollRef.current?.scrollTo({ x: (current - 1) * width });
						setCurrent((prev) => prev - 1);
					} else if (gestureState.dx < -50 && current < slideCount - 1) {
						// swipe left
						scrollRef.current?.scrollTo({ x: (current + 1) * width });
						setCurrent((prev) => prev + 1);
					}
					position.setValue(0);
				},
			}),
		[current]
	);

	return (
		<SafeAreaView style={globalStyles.container}>
			<View style={styles.container}>
				<ScrollView
					style={styles.imageBox}
					snapToInterval={width}
					horizontal
					ref={scrollRef}
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					decelerationRate={"fast"}
					{...panResponder.panHandlers}
				>
					{data.map((item) => (
						<View key={item.id} style={styles.imgContainer}>
							<Image style={styles.img} source={item.image} resizeMode="contain" />
						</View>
					))}
				</ScrollView>
				<Dots count={slideCount} active={current} />
				<View style={styles.descriptionBox}>
					<Text style={styles.title}>{data[current].title}</Text>
					<Text style={styles.text}> {data[current].description}</Text>
				</View>

				<View style={styles.actionsBox}>
					<AppButton press={skip} style={[styles.button, styles.skip]}>
						<Text style={styles.buttonText}>{current === slideCount - 1 ? "Log In" : "Skip"}</Text>
					</AppButton>
					<AppButton press={press} style={[styles.button, styles.next]}>
						<Text style={[styles.buttonText, { color: "white" }]}>
							{current === slideCount - 1 ? "get started" : "next"}
						</Text>
					</AppButton>
				</View>
			</View>
		</SafeAreaView>
	);
});

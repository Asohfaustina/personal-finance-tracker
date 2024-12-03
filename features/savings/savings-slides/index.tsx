import { View } from "@/components/theme";
import * as React from "react";
import { Animated, Dimensions, Image, PanResponder, ScrollView } from "react-native";
import { styles } from "./styles";
import Dots from "./dots";
import Render from "@/components/render";
import useSlides from "./use-slides";
import SavingsCard from "./savings-card";


const width = Dimensions.get("screen").width;

export default React.memo(function SavingsSlides() {
	const [current, setCurrent] = React.useState(0);
	const scrollRef = React.useRef<ScrollView | null>(null);
	const position = React.useRef(new Animated.Value(0)).current;
	const { isFetching, isError, error, data } = useSlides();
	const slideCount = data?.docs.length ?? 0;

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
		[current, slideCount]
	);

	return (
		<View style={styles.container}>
			<Render isLoading={isFetching} isError={isError} error={error} loadingPosition="top">
				<ScrollView
					style={styles.slidesBox}
					snapToInterval={width}
					horizontal
					// ref={scrollRef}
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					decelerationRate={"fast"}
					{...panResponder.panHandlers}
				>
					{data?.docs.map((item, idx) => (
						<SavingsCard key={item._id} {...item} isFirst={idx === 0} />
					))}
				</ScrollView>
				<Dots count={slideCount} active={current} />
			</Render>
		</View>
	);
});

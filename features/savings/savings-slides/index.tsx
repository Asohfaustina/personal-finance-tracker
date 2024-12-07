import { View } from "@/components/theme";
import * as React from "react";
import { Animated, Dimensions, FlatList, PanResponder, ScrollView } from "react-native";
import { styles } from "./styles";
import Dots from "./dots";
import Render from "@/components/render";
import useSlides from "./use-slides";
import SavingsCard from "./savings-card";
import EmptyComponent from "@/components/empty-component";

type SlidesProps = {
	scope?: "1" | "2";
};

const width = Dimensions.get("screen").width;

export default React.memo(function SavingsSlides({ scope = "1" }: SlidesProps) {
	const [current, setCurrent] = React.useState(0);
	const scrollRef = React.useRef<ScrollView | null>(null);
	const position = React.useRef(new Animated.Value(0)).current;
	const { isFetching, isError, isRefetching, refetch, error, savings } = useSlides();

	const slideCount = React.useMemo(() => {
		if (!savings) return 0;
		return savings.length;
	}, [savings]);

	const hasData = React.useMemo(() => {
		if (!savings) return false;
		return savings.length > 0;
	}, [savings]);

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

	if (scope === "2")
		return (
			<View style={styles.container2}>
				<Render isLoading={isFetching} isError={isError} error={error} loadingPosition="top">
					<FlatList
						renderItem={({ index, item }) => <SavingsCard key={index} {...item} scope={scope} />}
						showsVerticalScrollIndicator={false}
						data={savings}
						refreshing={isRefetching}
						ListEmptyComponent={() => {
							if (!hasData) {
								return (
									<EmptyComponent
										title="No Savings Record yet"
										body="You don't have any savings Record yet, create new savings and they'll appear here"
									/>
								);
							}
						}}
						onRefresh={() => {
							refetch();
						}}
					/>
				</Render>
			</View>
		);
	return (
		<View style={styles.container}>
			<Render isLoading={isFetching} isError={isError} error={error} loadingPosition="top">
				<ScrollView
					style={styles.slidesBox}
					snapToInterval={width}
					horizontal
					ref={scrollRef}
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					decelerationRate={"fast"}
					{...panResponder.panHandlers}
				>
					{savings.map((item, idx) => (
						<SavingsCard key={item._id} {...item} />
					))}
				</ScrollView>
				<Dots count={slideCount} active={current} />
			</Render>
		</View>
	);
});

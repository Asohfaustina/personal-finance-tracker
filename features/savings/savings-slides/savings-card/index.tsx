import { Text, View } from "@/components/theme";
import { Savings } from "@/types/savings";
import * as React from "react";
import { styles } from "./styles";
import { Link } from "expo-router";
import { globalStyles } from "@/styles/global.styles";
import { Dimensions } from "react-native";

 const width = Math.floor(Dimensions.get("screen").width);

export default React.memo(function SavingsCard({
	isFirst,
	...props
}: Savings & { isFirst: boolean }) {
	return (
		<View style={[styles.container, ]}>
			<View style={styles.cardBox}>
				<View style={styles.headerBox}>
					<View style={[globalStyles.bgNone, styles.savingsTitleBox]}>
						<Text style={styles.savingsTitle}>{props.title}</Text>
						<Text numberOfLines={1} style={styles.savingsComment}>
							{props.comments}
						</Text>
					</View>
					<View style={styles.actionBox}>
						<Link
							href={{ pathname: "/(root)/(main)/(tabs)/savings/[id]", params: { id: props._id } }}
							style={styles.actionText}
						>
							view savings{" "}
						</Link>
					</View>
				</View>
				<View style={styles.footerBox}>
					<View style={styles.durationBox}>
						<Text style={styles.durationText}>Duration</Text>
						<Text style={styles.durationDate}>
							{new Date(props.duration).toLocaleDateString("default", {
								dateStyle: "medium",
							})}
						</Text>
					</View>
					<View style={styles.amountBox}>
						<Text style={styles.currency}>{props.currency.toLocaleUpperCase()} </Text>
						<Text style={styles.amount}>
							{props.amount}/{props.targetAmount}
							{""}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
});

import { Text, View } from "@/components/theme";
import { Savings } from "@/types/savings";
import * as React from "react";
import { styles } from "./styles";
import { Link } from "expo-router";
import { globalStyles } from "@/styles/global.styles";

import Progress from "./progress";

 

export default React.memo(function SavingsCard(props: Savings & { scope?: "1" | "2" }) {
	
	
	
	return (
		<Link href={{pathname:"/(root)/(main)/(tabs)/savings/[id]", params:{id:props._id}}} style={[props.scope === "2" ? styles.container2: styles.container]}>
			<View style={styles.cardBox}>
				<View style={styles.headerBox}>
					<View style={[globalStyles.bgNone,]}>
						<Text style={styles.savingsTitle}>{props.title}</Text>
						<View style={styles.amountBox}>
							<Text style={styles.amount}>
								<Text style={styles.currency}>{props.currency.toLocaleUpperCase()} </Text>
								{props.amount}
								
							</Text>
						</View>
					</View>

					<Progress amount={props.amount} targetAmount={props.targetAmount} />
				</View>
				<View style={styles.footerBox}>
					<View style={styles.durationBox}>
						<Text style={styles.durationText}>
							Ends:{" "}
							<Text style={styles.durationDate}>
								{new Date(props.duration).toLocaleDateString("default", {
									dateStyle: "medium",
								})}
							</Text>
						</Text>
					</View>
					<View style={styles.durationBox}>
						<Text style={styles.durationText}>
							Target:{" "}
							<Text style={styles.durationDate}>
								{props.currency.toUpperCase()} {props.targetAmount}
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</Link>
	);
});



// <View style={[styles.container]}>
// 	<View style={styles.cardBox}>
// 		<View style={styles.headerBox}>
// 			<View style={[globalStyles.bgNone, styles.savingsTitleBox]}>
// 				<Text style={styles.savingsTitle}>{props.title}</Text>
// 				<Text numberOfLines={1} style={styles.savingsComment}>
// 					{props.comments}
// 				</Text>
// 			</View>
// 			<View style={styles.actionBox}>
// 				<Link
// 					href={{ pathname: "/(root)/(main)/(tabs)/savings/[id]", params: { id: props._id } }}
// 					style={styles.actionText}
// 				>
// 					view savings{" "}
// 				</Link>
// 			</View>
// 		</View>
// 		<View style={styles.footerBox}>
// 			<View style={styles.durationBox}>
// 				<Text style={styles.durationText}>Duration</Text>
// 				<Text style={styles.durationDate}>
// 					{new Date(props.duration).toLocaleDateString("default", {
// 						dateStyle: "medium",
// 					})}
// 				</Text>
// 			</View>
// 			<View style={styles.amountBox}>
// 				<Text style={styles.currency}>{props.currency.toLocaleUpperCase()} </Text>
// 				<Text style={styles.amount}>
// 					{props.amount}/{props.targetAmount}
// 					{""}
// 				</Text>
// 			</View>
// 		</View>
// 	</View>
// </View>;
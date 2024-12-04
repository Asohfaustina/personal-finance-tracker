import BottomSheet from "@/components/bottom-sheet";
import { Text, View } from "@/components/theme";
import * as React from "react";
import useDetails from "./use-details";
import Render from "@/components/render";
import { styles } from "./styles";
import BaseButton from "@/components/ui/base-button";
import { amountSeparator } from "@/lib/amount-separator";

export default React.memo(function Details() {
	const { isFetching, isError, error, refetch, data, show, press } = useDetails();

	if (!show) return;

	return (
		<BottomSheet min={0.5} max={0.58} title="Expense Details">
			<View style={styles.container}>
				<Render isLoading={isFetching} isError={isError} error={error} retry={refetch}>
					{data && (
						<React.Fragment>
							<View style={styles.detailsBox}>
								<Text style={styles.date}>
									{new Date(data?.createdAt).toLocaleDateString("default", { dateStyle: "full" })}{" "}
								</Text>
								<Text style={styles.category}>{data.category}</Text>

								<Text style={styles.comments}>
									<Text> Comments: </Text>
									{data.comments}
								</Text>
								<View style={styles.amountBox}>
									<Text style={styles.currency}>{data.currency.toUpperCase()} </Text>
									<Text style={styles.amount}>{amountSeparator(data.amount)}</Text>
								</View>
							</View>
							<BaseButton press={press} title="Dismiss" />
						</React.Fragment>
					)}
				</Render>
			</View>
		</BottomSheet>
	);
});

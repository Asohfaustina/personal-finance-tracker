import EmptyComponent from "@/components/empty-component";
import Render from "@/components/render";
import { View } from "@/components/theme";
import { FlatList } from "react-native";
import useExpenses from "./expense-item/use-expenses";
import * as React from "react";
import ExpenseItem from "./expense-item";
import { styles } from "./styles";

export default function ExpenseList() {
	const { isFetching, isError, error, isRefetching, data, hasMore, refetch, setPage } =
		useExpenses();

	const hasData = React.useMemo(() => {
		if (!data?.totalDocs) return false;
		return data.totalDocs > 0;
	}, [data?.totalDocs]);

	// TODO: Work on the pagination

	return (
		<View style={styles.container}>
			<Render isLoading={isFetching} isError={isError} error={error} loadingPosition="top">
				<FlatList
					renderItem={({ index, item }) => <ExpenseItem key={index} {...item} />}
					showsVerticalScrollIndicator={false}
					data={data?.docs}
					refreshing={isRefetching}
					ListEmptyComponent={() => {
						if (!hasData) {
							return (
								<EmptyComponent
									title="No Expense Record yet"
									body="You don't have any Expense Record yet, create new Expense and they'll appear here"
								/>
							);
						}
					}}
					onEndReached={() => {
						if (hasMore) setPage((prev) => prev + 1);
					}}
					onRefresh={() => {
						refetch();
					}}
				/>
			</Render>
		</View>
	);
}

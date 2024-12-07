import EmptyComponent from "@/components/empty-component";
import Render from "@/components/render";
import { Text, View } from "@/components/theme";
import { FlatList } from "react-native";
import useHistory from "./history-item/use-history";
import * as React from "react";
import HistoryItem from "./history-item";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";

export default function HistoryList() {
	const { isFetching, isError, error, isRefetching, history, hasMore, refetch, setPage } =
		useHistory();

	const hasData = React.useMemo(() => {
		return history.length > 0;
	}, [history.length]);

	// TODO: Work on the pagination

	return (
		<React.Fragment>
			<View style={styles.container}>
				<View>
					<Text style={globalStyles.headers}>History</Text>
				</View>
				<Render isLoading={isFetching} isError={isError} error={error} loadingPosition="top">
					<FlatList
						renderItem={({ index, item }) => <HistoryItem key={index} {...item} />}
						showsVerticalScrollIndicator={false}
						data={history}
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
		</React.Fragment>
	);
}

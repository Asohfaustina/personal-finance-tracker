import { Loading } from "@/components/loading";
import useCached from "@/hooks/use-cached";
import store, { persistor } from "@/store";
import { Redirect, Slot } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "@/components/toast";

function AppRoot() {
	const { isLoading, isOnboarded } = useCached();

	if (!isOnboarded) {
		return <Redirect href="/welcome" />;
	}
	return (
		<Loading isLoading={isLoading}>
			<Slot />
		</Loading>
	);
}

export default function AppLayout() {
	const client = new QueryClient();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<QueryClientProvider client={client}>
					<Toast>
						<AppRoot />
					</Toast>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}

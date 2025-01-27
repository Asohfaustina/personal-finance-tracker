import { useAppSelector } from "@/store/hooks";
import whoami from "@/services/account/whoami";
import axios from "@/lib/axios";
import * as React from "react";
import { Loading } from "./loading";
import useActions from "@/store/actions";
import { User } from "@/types/user";

type SecurityConfigProps = {
	children: React.ReactNode;
};

export function Security({ children }: SecurityConfigProps) {
	const [isLoading, setIsLoading] = React.useState(true);
	const { authToken, expiresAt, refreshToken } = useAppSelector((state) => state.account);
	const { root, account, resetStates } = useActions();

	const interceptor = React.useRef(0);

	const logoutUser = React.useCallback(() => {
		root.changeIsLoggedIn(false);

		account.changeAccountState({
			authToken: "",
			expiresAt: 0,
			refreshToken: "",
			user: {} as User,
		});
		resetStates();
	}, []);

	const confirmUserSession = React.useCallback(async () => {
		setIsLoading(true);
		if (!authToken) {
			logoutUser();
			setIsLoading(false);
			return;
		}
		try {
			const value = axios.interceptors.request.use(
				async (config) => {
					try {
						let access_token = authToken;
						// if (isExpired && refreshToken) {
						// 	const refreshResponse = await getRefreshedToken(refreshToken);
						// 	access_token = refreshResponse.key;
						// 	dispatch(
						// 		changeAccountState({
						// 			authToken: refreshResponse.key,
						// 			refreshToken: refreshResponse.refresh,
						// 			expiresAt: refreshResponse.exp,
						// 		})
						// 	);
						// }
						config.headers.Authorization = `Bearer ${access_token}`;
						return config;
					} catch (e) {
						throw e;
					}
				},
				(error) => {
					throw error;
				}
			);

			interceptor.current = value;

			const response = await whoami();

			account.changeAccountState({ user: response });
		} catch {
			logoutUser();
		} finally {
			setIsLoading(false);
		}
	}, [authToken, expiresAt, refreshToken, logoutUser]);

	React.useEffect(() => {
		confirmUserSession();
		return () => {
			axios.interceptors.request.eject(interceptor.current);
		};
	}, [confirmUserSession]);

	return <Loading isLoading={isLoading}>{children}</Loading>;
}

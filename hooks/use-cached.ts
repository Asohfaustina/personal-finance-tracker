import { fonts } from "@/constants";
import ensureError from "@/lib/ensure-error";
import { useAppSelector } from "@/store/hooks";
import { FontAwesome } from "@expo/vector-icons";
import { loadAsync } from "expo-font";
import { SplashScreen } from "expo-router";
import * as React from "react";

SplashScreen.preventAutoHideAsync();

export default function useCached() {
  const { isOnboarded, isLoggedIn } = useAppSelector((state) => state.root);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function loadAsyncResources() {
      try {
        await loadAsync({
          ...FontAwesome.font,
          GilroyBold: fonts.gilroy.bold,
          GilroySemiBold: fonts.gilroy.semiBold,
          GilroyMedium: fonts.gilroy.medium,
          GilroyLight: fonts.gilroy.light,
        });
      } catch (e) {
        const error = ensureError(e);
        setError(error);
      } finally {
        await SplashScreen.hideAsync();
        setIsLoading(false);
      }
    }
    loadAsyncResources();
  }, []);

  return {
    isLoggedIn,
    isOnboarded,
    isLoading,
    error,
  };
}

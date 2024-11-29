import * as React from "react";
import ToastComponent from "./toast-component";
import { useAppSelector } from "@/store/hooks";

type ToastProps = {
	children: React.ReactNode;
};

export default React.memo(function Toast({ children }: ToastProps) {
	const { showToast } = useAppSelector((state) => state.ui);
	return (
		<React.Fragment>
			{children}
			{showToast && <ToastComponent />}
		</React.Fragment>
	);
});

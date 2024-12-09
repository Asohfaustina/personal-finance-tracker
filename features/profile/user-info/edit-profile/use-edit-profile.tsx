import useActions from "@/store/actions";
import { useAppSelector } from "@/store/hooks";
import * as React from "react";
import { z } from "zod";
import ensureError from "@/lib/ensure-error";
import updateAccount from "@/services/account/update-account";

const validate = z.object({
	name: z.string().trim().min(3, "Name must be at least 3 characters"),
	// .max(12, "Name must not exceed 12 characters"),
});

type FormData = z.infer<typeof validate>;
export default function useEditProfile(close: () => void) {
	const { user } = useAppSelector((state) => state.account);
	const [isLoading, setIsLoading] = React.useState(false);
	const [formData, setFormData] = React.useState<FormData>({
		name: user.name ?? "",
	});
	const { account, ui } = useActions();

	const updateForm = (name: keyof typeof formData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const update = async () => {
		if (!user?._id) return;
		setIsLoading(true);
		try {
			const formValues = validate.parse({
				...formData,
			});
			const response = await updateAccount({ ...formValues, userId: user._id });
			account.updateUser(response);
			ui.toggleToast({ msgs: "User Updated Successfully", show: true });
			close();
		} catch (e) {
			const errMsg = ensureError(e).message;
			ui.toggleToast({ msgs: errMsg, show: true });
		} finally {
			setIsLoading(false);
		}
	};

	const handleClose = () => {
		if (isLoading) return;
		close();
	};

	return {
		formData,
		isLoading,
		updateForm,
		update,
		close: handleClose,
	};
}

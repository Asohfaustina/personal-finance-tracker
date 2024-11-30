export const amountSeparator = (num: string | number, separator = ",") => {
	if (!num) return;
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

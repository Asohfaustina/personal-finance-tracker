import React from "react";
/**
 *this is a countdown hook that takes an countdown in ms
 *
 * @param {number} countdown in ms
 * @return {*}  {[count: number, reset: () => void]}
 */
const useCountdown = (countdown: number): [count: number, reset: () => void] => {
	const [counter, setCounter] = React.useState(countdown);
	const reset = () => {
		setCounter(countdown);
	};
	React.useEffect(() => {
		if (counter > 0) {
			const countIntervalId = setInterval(() => {
				setCounter((prev) => prev - 1);
			}, 1000);

			return () => {
				clearInterval(countIntervalId);
			};
		}
	}, [countdown, counter]);
	return [counter, reset];
};

export default useCountdown;
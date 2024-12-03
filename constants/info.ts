type ScreenInfoType = {
	title: string;
	text: string;
};

type Screens = "expenses" | "savings" | "profile";

type InfoType = {
	[id in Screens]: ScreenInfoType;
};

// TODO populate all the screen info
export const screenInfo: InfoType = {
	expenses: {
		title: "Expenses",
		text: "Access all your expense history and metrics, Make new expense and view expense details.",
	},

	savings: {
		title: "",
		text: "",
	},
	profile: {
		title: "",
		text: "",
	},
};

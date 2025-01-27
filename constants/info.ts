type ScreenInfoType = {
  title: string;
  text: string;
};

type Screens = 'expenses' | 'savings' | 'savingsDetails' | 'profile';

type InfoType = {
  [id in Screens]: ScreenInfoType;
};

// TODO populate all the screen info
export const screenInfo: InfoType = {
  expenses: {
    title: 'Expenses',
    text: 'Access all your expense history and metrics, Make new expense and view expense details.',
  },

  savings: {
    title: 'Savings',
    text: 'Access all your savings with their individual details. you have limit slots for savings.',
  },
  savingsDetails: {
    title: 'Savings details',
    text: 'view the details of your Savings ',
  },
  profile: {
    title: 'profile',
    text: 'User information',
  },
};

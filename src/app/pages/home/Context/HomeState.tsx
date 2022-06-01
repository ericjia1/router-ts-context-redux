export interface HomeState {
  userInfo: {
    subTitle: string;
  };
  history: {
    updatedTimes: number;
  };
}

export const HomeDefaultState: HomeState = {
  userInfo: {
    subTitle: "",
  },
  history: {
    updatedTimes: 0,
  },
};

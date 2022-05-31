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
    subTitle: "Default Sub Title",
  },
  history: {
    updatedTimes: 0,
  },
};

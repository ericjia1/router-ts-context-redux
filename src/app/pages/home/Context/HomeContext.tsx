import { createContext, FC, useState } from "react";
import { HomeDefaultState, HomeState } from "./HomeState";

interface HomeContextI {
  homeState: HomeState;
  updateHomeState: React.Dispatch<React.SetStateAction<any>>;
}

export const HomeContext = createContext({} as HomeContextI);

export const HomeContextProvider: FC = ({ children }) => {
  const [homeState, setHomeState] = useState<HomeState>(HomeDefaultState);

  const value = {
    homeState,
    updateHomeState,
  };
  function updateHomeState(newState: any) {
    setHomeState((prevState: any) => {
      return { ...prevState, ...newState };
    });
  }

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

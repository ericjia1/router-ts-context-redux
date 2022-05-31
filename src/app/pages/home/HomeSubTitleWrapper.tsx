import React, { useContext } from "react";
import { HomeContext } from "./Context/HomeContext";
import HomeInput from "./HomeInput";

interface HomeSubTitleWrapperI {}
function HomeSubTitleWrapper(props: HomeSubTitleWrapperI) {
  const { homeState, updateHomeState } = useContext(HomeContext);

  const handleOnInputChange = (subTitleInput: string) => {
    console.log('sfdsfdsfds', homeState);
    let obj = homeState;
    obj.userInfo.subTitle = subTitleInput;
    obj.history.updatedTimes = obj.history.updatedTimes + 1;
    console.log("obj", obj);
    updateHomeState(obj);
  };

  return (
    <>
      <br />
      <HomeInput
        onInputChange={handleOnInputChange}
        title={"Sub Title Input"}
        notes="Type here to change Sub Title"
        defaultValue={homeState?.userInfo?.subTitle}
      ></HomeInput>
    </>
  );
}

export default HomeSubTitleWrapper;

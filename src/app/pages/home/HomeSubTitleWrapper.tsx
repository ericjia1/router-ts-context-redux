import React, { useContext } from "react";
import { HomeContext } from "./Context/HomeContext";
import HomeInput from "./HomeInput";

interface HomeSubTitleWrapperI {}
function HomeSubTitleWrapper(props: HomeSubTitleWrapperI) {
  const { homeState, updateHomeState } = useContext(HomeContext);

  const handleOnInputChange = (subTitleInput: string) => {
    let obj = homeState;
    obj.userInfo.subTitle = subTitleInput;
    obj.history.updatedTimes = obj.history.updatedTimes + 1;
    updateHomeState(obj);
  };

  return (
    <>
      <br />
      <HomeInput
        onInputChange={handleOnInputChange}
        title={"Sub Title Input using Context"}
        notes="Type here to change Sub Title"
        defaultValue={homeState?.userInfo?.subTitle}
      />
    </>
  );
}

export default HomeSubTitleWrapper;

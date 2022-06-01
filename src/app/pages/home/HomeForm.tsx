import React from "react";
import HomeNameWrapper from "./HomeNameWrapper";
import HomeSubTitleWrapper from "./HomeSubTitleWrapper";
import HomeTitleWrapper from "./HomeTitleWrapper";

interface HomeFormI {
  handleChangeTitle: (input: string) => void;
}
function HomeForm(props: HomeFormI) {
  const { handleChangeTitle } = props;

  return (
    <form noValidate autoComplete="off">
        <HomeTitleWrapper onInputChange={handleChangeTitle} ></HomeTitleWrapper>
        <HomeSubTitleWrapper />
        <HomeNameWrapper />
    </form>
  );
}

export default HomeForm;

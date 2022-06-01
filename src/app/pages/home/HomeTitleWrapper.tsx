import React from "react";
import HomeInput from "./HomeInput";

interface HomeTitleWrapperI {
  onInputChange: (input: string) => void;
}
function HomeTitleWrapper(props: HomeTitleWrapperI) {
  const { onInputChange } = props;

  return (
    <>
      <br />
      <HomeInput
        onInputChange={onInputChange}
        title={"Title Input using Props"}
        notes="Type here to change Title"
      />
    </>
  );
}

export default HomeTitleWrapper;

import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import PageTitle from "../../components/title/PageTitle";
import UserCard from "../../components/user/UserCard";
import ContainerWrapper from "../../components/wrapper/ContainerWrapper";
import { HomeContext } from "./Context/HomeContext";
import HomeForm from "./HomeForm";

export const Home = (props: any) => {
  const { user } = props;
  const [title, setTitle] = useState("");
  const { homeState } = useContext(HomeContext);
  const handleChangeTitle = (titleInput: string) => setTitle(titleInput);

  return (
      <ContainerWrapper width={"lg"}>
        <PageTitle title={"Home Page"} />
        <UserCard
          firstName={user.firstName}
          lastName={user.lastName}
          title={title}
          subTitle={homeState.userInfo?.subTitle ? homeState.userInfo?.subTitle : "" }
        />
        <HomeForm handleChangeTitle={handleChangeTitle}></HomeForm>
      </ContainerWrapper>
  );
};

const mapStateToProps = (state: any) => ({ user: state.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import PageTitle from "../components/title/PageTitle";
import UserCard from "../components/user/UserCard";

export const Home = (props: any) => {
  const { user } = props;

  return (
    <>
      <PageTitle title={"Home Page"} />
      <UserCard firstName={user.firstName} lastName={user.lastName} />
    </>
  );
};

const mapStateToProps = (state: any) => ({ user: state.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

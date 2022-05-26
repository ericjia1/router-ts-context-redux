import React from "react";
import { connect } from "react-redux";
import PageTitle from "../components/title/PageTitle";

export const Dashboard = (props: any) => {
  return (
    <>
      <PageTitle title={"Dashboard Page"} />
    </>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

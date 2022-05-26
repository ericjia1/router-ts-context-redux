import React from "react";
import { connect } from "react-redux";
import PageTitle from "../components/title/PageTitle";

export const About = (props: any) => {
  return (
    <>
      <PageTitle title={"About Page"} />
    </>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);

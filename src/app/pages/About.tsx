import React from "react";
import { connect } from "react-redux";
import PageTitle from "../components/title/PageTitle";
import ContainerWrapper from "../components/wrapper/ContainerWrapper";

export const About = (props: any) => {
  return (
    <>
      <PageTitle title={"About Page"} />
      <ContainerWrapper width={"lg"}>dfd</ContainerWrapper>
    </>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);

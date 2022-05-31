import React from "react";
import { connect } from "react-redux";
import ContainerWrapper from "../components/wrapper/ContainerWrapper";
import PageTitle from "../components/title/PageTitle";

export const NestedPage = (props: any) => {
  return (
    <>
      <ContainerWrapper width="md">
        <PageTitle title={"Team Page"} />
      </ContainerWrapper>
    </>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NestedPage);

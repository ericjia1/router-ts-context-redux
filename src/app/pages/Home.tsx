import React from "react";
import { connect } from "react-redux";

export const Home = (props: any) => {
  return <div>Home</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

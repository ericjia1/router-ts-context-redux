import React from "react";
import { connect } from "react-redux";

export const Dashboard = (props: any) => {
  return <div>Dashboard</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

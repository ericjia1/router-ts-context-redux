import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import { history } from "./history";
export const Paths = {
  home: "/",
  default: "/",
  about: "/about",
  dashboard: "/dashboard",
};

export const RouterPath = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.home} element={<Home />} />
        <Route path={Paths.about} element={<About />} />
        <Route path={Paths.dashboard} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export class PageHelper {
  static openPage(page: string, state?: any): void {
    history.push(page, state);
  }
}

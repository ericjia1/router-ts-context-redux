import React from "react";
import { Route, Switch } from "react-router";
import { history } from "../route/history";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export const Paths = {
  default: "/",
  home: "/",
  about: "/about",
  dashboard: "/dashboard",
};

export const Links = [
  {
    path: Paths.default,
    render: (props: any) => <Home {...props} />,
  },
  {
    path: Paths.home,
    render: (props: any) => <Home {...props} />,
  },
  {
    path: Paths.about,
    render: (props: any) => <About {...props} />,
  },
  {
    path: Paths.dashboard,
    render: (props: any) => <Dashboard {...props} />,
  },
];

export const Router = (props: any) => {
  const routes = Links.map((item, i) => (
    <Route exact path={item.path} render={item.render} key={i + "-public"} />
  ));

  return <Switch>{routes}</Switch>;
};

export class PageHelper {
  static openPage(page: string, state?: any): void {
    history.push(page, state);
  }
}

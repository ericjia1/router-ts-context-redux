import React from "react";
import { Route, Switch } from "react-router";
import { history } from "../route/history";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { HomeContextProvider } from "./pages/home/Context/HomeContext";
import Home from "./pages/home/Home";
import TeamPage from "./pages/TeamPage";

export const Paths = {
  default: "/",
  home: "/",
  about: "/about",
  dashboard: "/dashboard",
  team: "/team",
};

export const Router = (props: any) => {
  return (
    <Switch>
      <Route
        exact
        path={Paths.default}
        render={() => (
          <HomeContextProvider>
            <Home {...props} />{" "}
          </HomeContextProvider>
        )}
        key={"default-public"}
      />
      <Route
        exact
        path={Paths.home}
        render={() => <Home {...props} />}
        key={"home-public"}
      />
      <Route
        exact
        path={Paths.about}
        render={() => <About {...props} />}
        key={"about-public"}
      />
      <Route
        exact
        path={Paths.dashboard}
        render={() => <Dashboard {...props} />}
        key={"dashboard-public"}
      />
      <Route
        exact
        path={Paths.team}
        render={() => <TeamPage {...props} />}
        key={"team-public"}
      />
    </Switch>
  );
};

export class PageHelper {
  static openPage(page: string, state?: any): void {
    history.push(page, state);
  }
}

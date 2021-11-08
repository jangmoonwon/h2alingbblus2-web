import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../containers/MainPage";
import AboutPage from "../containers/AboutPage";
import WorshipPage from "../containers/WorshipPage";
import PhotoPage from "../containers/PhotoPage";
import Album1 from "../containers/PhotoPage/Album1";
import Album2 from "../containers/PhotoPage/Album2";
import Album3 from "../containers/PhotoPage/Album3";

import Header from "../components/Header";
import RouterContainer from "../components/RouterContainer";

import pathInfo from "./paths.json";

export default function MainRoutes() {
  const renderHeader = (): ReactElement => {
    return <Header />;
  };
  return (
    <RouterContainer renderHeader={renderHeader}>
      <Switch>
        <Route exact path={pathInfo.main} component={MainPage} />
        <Route path={pathInfo.about} component={AboutPage} />
        <Route path={pathInfo.worship} component={WorshipPage} />
        <Route path={pathInfo.photo} component={PhotoPage} />
        <Route path={pathInfo.album1} component={Album1} />
        <Route path={pathInfo.album2} component={Album2} />
        <Route path={pathInfo.album3} component={Album3} />
      </Switch>
    </RouterContainer>
  );
}

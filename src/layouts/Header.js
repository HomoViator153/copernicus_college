import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/layouts/Header.css";

import HomeHeader from "../pages/header/HomeHeader";
import CoursesHeader from "../pages/header/CoursesHeader";
import LecturesHeader from "../pages/header/LecturesHeader";
import ABCHeader from "../pages/header/ABCHeader";
import TextbooksHeader from "../pages/header/TextbooksHeader";
import LecturersHeader from "../pages/header/LecturersHeader";
import CategoriesHeader from "../pages/header/CategoriesHeader";

const Header = (props) => {
  const lang = props.lang;
  return (
    <div className="header">
      <Switch>
        <Route path="/" exact render={() => <HomeHeader lang={lang} />} />
        <Route path="/kursy/lista" exact render={() => <CoursesHeader lang={lang} />} />
        <Route path="/wyklady/lista" exact render={() => <LecturesHeader lang={lang} />} />
        <Route path="/abc/lista" exact render={() => <ABCHeader lang={lang} />} />
        <Route path="/podreczniki/lista" exact render={() => <TextbooksHeader lang={lang} />} />
        <Route path="/wykladowcy/lista" exact render={() => <LecturersHeader lang={lang} />} />
        <Route path="/kategorie/lista" exact render={() => <CategoriesHeader lang={lang} />} />
      </Switch>
    </div>
  );
};

export default Header;

import { StudyListPage, StudySearchPage } from "@src/app/study";
import React from "react";
import { Route, Switch } from "react-router-dom";

const StudyPage = (): JSX.Element => (
  <Switch>
    <Route exact path="/study/list" component={StudyListPage}/>
    <Route exact path="/study/search" component={StudySearchPage}/>
  </Switch>
);

export default StudyPage;
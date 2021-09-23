import React from "react";
import { Route, Switch } from "react-router-dom";
import StudyListPage from "@src/app/study/StudyListPage";
import './styles.scss';

const StudyPage = (): JSX.Element => (
  <div className="studyPage-con">
    <div>스터디</div>
    <Switch>
      <Route exact path="/study/list" component={StudyListPage}/>
    </Switch>
  </div>
);

export default StudyPage;
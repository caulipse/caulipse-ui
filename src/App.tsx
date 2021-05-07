import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@src/pages/Home";
import { StudySearchPage, StudyListPage } from "@src/pages/Study";
import Header from "./app/shared/components/header";
import "./App.scss";
import SideBar from "./app/shared/components/sidebar";

const RoutePage: React.FC = () => (
  <div className="router-con">
    <SideBar/>
    <Switch>
      {/* 스터디 > 과목별 스터디 */}
      <Route exact path="/study/list" component={StudyListPage} />
      {/* 스터디 > 찾아보기 */}
      <Route exact path="/study/search" component={StudySearchPage} />
      <Route path="*" component={Home} />
    </Switch>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <RoutePage/>
    </BrowserRouter>
  );
};

export default App;

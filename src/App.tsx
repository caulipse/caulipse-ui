import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@src/pages/Home";
import { StudySearchPage, StudyListPage } from "@src/pages/Study";
import "./App.scss";
import { Footer, Header, SideBar, UpperContent } from "./app/shared/components";

const MainContainer: React.FC = () => (
  <div className="router-con">
    <UpperContent/>
    <div className="main-con">
      <SideBar/>
      <Switch>
        <Route exact path="/study/list" component={StudyListPage} />
        <Route exact path="/study/search" component={StudySearchPage} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MainContainer/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

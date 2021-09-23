import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Footer, Header, SideBar } from "./app/shared/components";

import HomePage from "./pages/Home";
import NonsubjectPage from "./pages/Nonsubject";
import PostPage from "./pages/Post";
import ProfilePage from "./pages/Profile";
import StudyPage from "./pages/Study";

const MainContainer = (): JSX.Element => (
  <div className="router-con">
    <SideBar/>
    <div className="main-con">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/study" component={StudyPage}/>
        <Route path="/post" component={PostPage}/>
        <Route path="/nonsub" component={NonsubjectPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Redirect path="*" to="/"/>
      </Switch>
    </div>
  </div>
);

const App = (): JSX.Element => {
  return (
    <Router>
      <Header/>
      <MainContainer/>
      <Footer/>
    </Router>
  );
};

export default App;

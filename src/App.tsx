import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Footer, Header } from "./app/shared/components";
import ProfilePage from "./pages/Profile";
import StudyPage from "./pages/Study";
import StudyDetailPage from "./pages/StudyDetail";

const MainContainer = (): JSX.Element => (
  <div className="router-con">
    <div className="main-con">
        <Switch>
          <Route exact path="/study/:category" component={StudyPage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/study/detail/:studyId" component={StudyDetailPage}/>
          <Redirect path="*" to="/study/employment"/>
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

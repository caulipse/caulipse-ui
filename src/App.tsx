import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import { Footer, Header } from "./app/shared/components";
import ProfilePage from "./pages/Profile";
import StudyPage from "./pages/Study";

const MainContainer = (): JSX.Element => (
  <div className="router-con">
    <div className="main-con">
        <Switch>
          <Route exact path="/" component={StudyPage}/>
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

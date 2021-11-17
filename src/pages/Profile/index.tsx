import React from 'react';
import { Route, Switch } from "react-router-dom";
import BookmarkPage from "./bookmark/BookmarkPage";
import MyPage from "./my/MyPage";

const ProfilePage = (): JSX.Element => (
  <Switch>
    <Route exact path='/profile/my' component={MyPage}/>
    <Route exact path='/profile/bookmark' component={BookmarkPage} />
  </Switch>
);

export default ProfilePage;
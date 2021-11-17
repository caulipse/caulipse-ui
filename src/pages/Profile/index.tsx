import { BookmarkPage, MyPage, SettingPage, StudyPage, StudyRecruitPage } from "@src/app/profile";
import React from "react";
import { Route, Switch } from "react-router-dom";

const ProfilePage = (): JSX.Element => (
  <Switch>
    <Route exact path='/profile/my' component={MyPage}/>
    <Route exact path='/profile/setting' component={SettingPage} />
    <Route exact path='/profile/bookmark' component={BookmarkPage} />
    <Route exact path='/profile/study' component={StudyPage} />
    <Route exact path='/profile/study-recruit' component={StudyRecruitPage} />
  </Switch>
);

export default ProfilePage;
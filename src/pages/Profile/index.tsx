import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookmarkPage from './bookmark';
import MyPage from './my/MyPage';
import MyProfileEditPage from './myProfileEdit/MyProfileEditPage';
import AppliedStudiesPage from './appliedStudies/AppliedStudiesPage';
import RecruitingStudiesPage from './recruitingStudies/RecruitingStudiesPage';

const ProfileContainer = (): JSX.Element => (
	<Switch>
		<Route exact path="/profile/edit" component={MyProfileEditPage} />
		<Route path="/profile/studies" component={ProfileStudies} />
		<Route exact path="/profile/:userId" component={MyPage} />
		<Route exact path="/bookmark" component={BookmarkPage} />
		<Route exact path="/appliedStudies" component={AppliedStudiesPage} />
		<Route exact path="/recruitingStudies" component={RecruitingStudiesPage} />
	</Switch>
);

const ProfilePage = (): JSX.Element => {
	return (
		<BrowserRouter>
			<ProfileContainer />
		</BrowserRouter>
	);
};

export default ProfilePage;

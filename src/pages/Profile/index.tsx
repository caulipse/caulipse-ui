import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookmarkPage from './bookmark';
import MyPage from './my/MyPage';
import MyProfileEditPage from './myProfileEdit/MyProfileEditPage';
import AppliedStudiesPage from './appliedStudies/AppliedStudiesPage';
import ProfileStudies from './studies';

const ProfileContainer = (): JSX.Element => (
	<Switch>
		<Route exact path="/profile/edit" component={MyProfileEditPage} />
		<Route path="/profile/studies" component={ProfileStudies} />
		<Route exact path="/profile/:userId" component={MyPage} />
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

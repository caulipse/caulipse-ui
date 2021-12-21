import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookmarkPage from './bookmark';
import MyPage from './my/MyPage';
import ProfileHeader from '../../app/profile/header';
import MyProfileEditPage from './myProfileEdit/MyProfileEditPage';

const ProfileContainer = (): JSX.Element => (
	<Switch>
		<Route exact path="/profile/:userId" component={MyPage} />
		<Route exact path="/bookmark" component={BookmarkPage} />
		<Route exact path="/profile/edit" component={MyProfileEditPage} />
	</Switch>
);

const ProfilePage = (): JSX.Element => {
	return (
		<BrowserRouter>
			<ProfileHeader />
			<ProfileContainer />
		</BrowserRouter>
	);
};

export default ProfilePage;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookmarkPage from './bookmark/BookmarkPage';
import MyPage from './my/MyPage';

const ProfileContainer = (): JSX.Element => (
	<Switch>
		<Route exact path="/profile" component={MyPage} />
		<Route exact path="/profile/bookmark" component={BookmarkPage} />
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

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyPage from './my/MyPage';
import MyProfileEditPage from './myProfileEdit/MyProfileEditPage';
import NoticeDetailPage from './notice/NoticeDetailPage';
import NoticePage from './notice/NoticePage';
import ProfileStudies from './studies';

const ProfileContainer = (): JSX.Element => (
	<Switch>
		<Route exact path="/profile/edit" component={MyProfileEditPage} />
		<Route exact path="/profile/notice" component={NoticePage} />
		<Route exact path="/profile/notice/:noticeId" component={NoticeDetailPage} />
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

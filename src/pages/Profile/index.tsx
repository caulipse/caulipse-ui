import React from 'react';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import MyPage from './my/MyPage';
import MyProfileEditPage from './myProfileEdit/MyProfileEditPage';
import NoticeDetailPage from './notice/NoticeDetailPage';
import NoticePage from './notice/NoticePage';
import ProfileStudies from './studies';

interface ProfileContainerProps{
	path: string;
}

const ProfileContainer = ({path}:ProfileContainerProps): JSX.Element => {

	return (
		<Switch>
			<Route exact path={`${path}/edit`} component={MyProfileEditPage} />
			<Route exact path={`${path}/notice`} component={NoticePage} />
			<Route exact path={`${path}/notice/:noticeId`} component={NoticeDetailPage} />
			<Route path={`${path}/studies`} component={ProfileStudies} />
			<Route exact path={`${path}/:userId`} component={MyPage} />
		</Switch>
	);
};

const ProfilePage = (): JSX.Element => {
	const { path } = useRouteMatch();

	return (
		<BrowserRouter>
			<ProfileContainer path={path}/>
		</BrowserRouter>
	);
};

export default ProfilePage;

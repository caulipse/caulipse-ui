import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import AppliedStudiesPage from '../appliedStudies/AppliedStudiesPage';
import BookmarkPage from '../bookmark';
import ProfileStudiesHeader from '../../../app/profile/header';

const ProfileStudies = (): JSX.Element => {
	const {path, url}=useRouteMatch()
	console.log('path: ', path, 'url: ', url);

	return (
		<BrowserRouter>
            <ProfileStudiesHeader />
			<Switch>
				<Route exact path={`${path}/bookmark`} component={BookmarkPage} />
				<Route exact path={`${path}/appliedStudies`} component={AppliedStudiesPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default ProfileStudies;

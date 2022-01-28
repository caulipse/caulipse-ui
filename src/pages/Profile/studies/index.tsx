import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import AppliedStudiesPage from '../appliedStudies/AppliedStudiesPage';
import BookmarkPage from '../bookmark';
import ProfileStudiesHeader from '../../../app/profile/header';
import RecruitingStudiesPage from '../recruitingStudies/RecruitingStudiesPage';

const ProfileStudies = (): JSX.Element => {
	const {path, url}=useRouteMatch()

	return (
		<BrowserRouter>
            <ProfileStudiesHeader />
			<Switch>
				<Route exact path={`${path}/bookmark`} component={BookmarkPage} />
				<Route exact path={`${path}/appliedStudies`} component={AppliedStudiesPage} />
				<Route exact path={`${path}/recruitingStudies`} component={RecruitingStudiesPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default ProfileStudies;

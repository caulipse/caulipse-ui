import MyProfileEditContainer from '@src/app/profile/myProfileEdit/MyProfileEditContainer';
import React from 'react';
import './MyProfileEditPage.scss';

const MyProfileEditPage = (): JSX.Element => {
	return (
		<div className="my-profile-edit-page-bg">
			<div className="my-profile-edit-page-container">
				<MyProfileEditContainer />
			</div>
		</div>
	);
};

export default MyProfileEditPage;

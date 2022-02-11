import MyBtns from '@src/app/profile/my/btns';
import MyHeaderContainer from '@src/app/profile/my/header/MyHeaderContainer';
import NotificationsContainer from '@src/app/profile/my/notifications/NotificationsContainer';
import PreviewContainer from '@src/app/profile/my/preview/PreviewContainer';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';

interface MyPageParamsInterface {
	userId: string;
}

const MyPage = (): JSX.Element => {
	const params = useParams<MyPageParamsInterface>();

	return (
		<div className="my-page-container">
			<MyHeaderContainer />
			<div className="my-page-boxes">
				<PreviewContainer />
				<NotificationsContainer />
				<MyBtns />
			</div>
		</div>
	);
};

export default MyPage;

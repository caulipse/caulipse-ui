import MyBtns from '@src/app/profile/my/btns';
import MyHeaderContainer from '@src/app/profile/my/header/MyHeaderContainer';
import PreviewContainer from '@src/app/profile/my/preview/PreviewContainer';
import React from 'react';
import './index.scss';

const MyPage = (): JSX.Element => {
	return (
		<div className="my-page-container">
			<MyHeaderContainer />
			<div className="my-page-boxes">
				<PreviewContainer />
				<MyBtns />
			</div>
		</div>
	);
};

export default MyPage;

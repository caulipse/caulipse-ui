import MyHeaderContainer from '@src/app/profile/my/header/MyHeaderContainer';
import PreviewContainer from '@src/app/profile/my/preview/PreviewContainer';
import React from 'react';
import './index.scss';

// interface MyPageProps {}

const MyPage = (): JSX.Element => {
	return (
		<div className="my-page-container">
			<MyHeaderContainer />
			<PreviewContainer />
		</div>
	);
};

export default MyPage;

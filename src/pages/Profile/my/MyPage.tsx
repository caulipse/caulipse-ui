import MyHeaderContainer from '@src/app/profile/my/header/MyHeaderContainer';
import PreviewContainer from '@src/app/profile/my/preview/PreviewContainer';
import React from 'react';

// interface MyPageProps {}

const MyPage = ():JSX.Element => {
	return (
		<div>
			<MyHeaderContainer />
			<PreviewContainer />
		</div>
	);
};

export default MyPage;

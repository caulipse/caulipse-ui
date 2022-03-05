import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const exampleId = '02626cbc-2b7f-4e1f-ad14-8d4c70c9fed2';

const MyHeaderContainer = (): JSX.Element => {
	const userName = useFetchUserProfile(exampleId).data?.userProfile.userName;

	return <div>{userName && <MyHeaderPresenter userName={userName} />}</div>;
};

export default MyHeaderContainer;

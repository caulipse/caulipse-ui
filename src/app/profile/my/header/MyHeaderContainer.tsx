import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const exampleId = '0357501b-8887-42e1-9dde-8344e0de60b0';

const MyHeaderContainer = (): JSX.Element => {
	const userProfile = useFetchUserProfile(exampleId).data?.userProfile;

	return <div>{userProfile && <MyHeaderPresenter userProfile={userProfile} />}</div>;
};

export default MyHeaderContainer;

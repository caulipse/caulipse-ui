import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const exampleId = '00fe16f3-5b45-4f25-889c-caa6c5b8e228';

const MyHeaderContainer = (): JSX.Element => {
	const userProfile = useFetchUserProfile(exampleId).data?.userProfile;

	return <div>{userProfile && <MyHeaderPresenter userProfile={userProfile} />}</div>;
};

export default MyHeaderContainer;

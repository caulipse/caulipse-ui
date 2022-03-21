import useFetchUser from '@src/hooks/remotes/user/useFetchUser';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const exampleId = '0357501b-8887-42e1-9dde-8344e0de60b0';

const MyHeaderContainer = (): JSX.Element => {
	const userProfile = useFetchUserProfile(exampleId).data?.userProfile;
	const userEmail = useFetchUser().data?.data.email;

	return <div>{userProfile && userEmail && <MyHeaderPresenter userProfile={userProfile} userEmail={userEmail} />}</div>;
};

export default MyHeaderContainer;

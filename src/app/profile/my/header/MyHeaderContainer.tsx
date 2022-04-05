import useFetchUser from '@src/hooks/remotes/user/useFetchUser';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const exampleId = '28464dc7-7537-4b91-9d52-764b6de32122';

const MyHeaderContainer = (): JSX.Element => {
	const userProfile = useFetchUserProfile(exampleId).data?.userProfile;
	const userEmail = useFetchUser().data?.data.email;

	return <div>{userProfile && userEmail && <MyHeaderPresenter userProfile={userProfile} userEmail={userEmail} />}</div>;
};

export default MyHeaderContainer;

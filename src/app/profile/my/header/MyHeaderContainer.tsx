import useFetchUser from '@src/hooks/remotes/user/useFetchUser';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import { userState as globalUserState } from '@src/state';
import { useAtom } from 'jotai';
import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

const MyHeaderContainer = (): JSX.Element => {
	const [userState] = useAtom(globalUserState);

	const userProfile = useFetchUserProfile(userState.userId).data?.userProfile;
	const userEmail = useFetchUser().data?.data.email;

	return <div>{userProfile && userEmail && <MyHeaderPresenter userProfile={userProfile} userEmail={userEmail} />}</div>;
};

export default MyHeaderContainer;

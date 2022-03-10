import Loader from '@src/components/common/loader/Loader';
import useFetchUser from '@src/hooks/remotes/user/useFetchUser';
import React from 'react';
import AccountInfoPresenter from './AccountInfoPresenter';

const AccountInfoContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchUser();

	console.log('data, ', data);
	return <div>{isLoading ? <Loader /> : <AccountInfoPresenter userId={data?.data.email} />}</div>;
};

export default AccountInfoContainer;

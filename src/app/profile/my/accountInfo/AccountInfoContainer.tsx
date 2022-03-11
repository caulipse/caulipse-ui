import Loader from '@src/components/common/loader/Loader';
import useFetchUser from '@src/hooks/remotes/user/useFetchUser';
import React from 'react';
import AccountInfoPresenter from './AccountInfoPresenter';

const AccountInfoContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchUser();

	return <div>{isLoading ? <Loader /> : data?.data.email && <AccountInfoPresenter userId={data?.data.email} />}</div>;
};

export default AccountInfoContainer;

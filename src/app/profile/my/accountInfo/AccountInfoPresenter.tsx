import React from 'react';
import './styles.scss';
import { Button } from '@material-ui/core';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

interface AccountInfoPresenterProps {
	userId: string;
}

const AccountInfoPresenter = ({ userId }: AccountInfoPresenterProps): JSX.Element => {
	const history = useHistory();

	return (
		<div>
			<div className="account-info-header-container">
				<button type="button" onClick={() => history.goBack()}>
					<IoArrowBack color="#f2f2f2" size={24} />
				</button>
				<div className="account-info-header-title">계정 정보</div>
				<div />
			</div>
		</div>
	);
};

export default AccountInfoPresenter;

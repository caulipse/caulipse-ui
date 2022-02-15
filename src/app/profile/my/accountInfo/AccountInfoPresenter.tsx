import React from 'react';
import './styles.scss';
import { Button } from '@material-ui/core';
import { IoArrowBack, IoChevronForward } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

interface AccountInfoPresenterProps {
	userId: string;
}

const AccountInfoPresenter = ({ userId }: AccountInfoPresenterProps): JSX.Element => {
	const history = useHistory();

	const changePw = () => {
		console.log('changePw');
	};

	const logout = () => {
		console.log('logout');
	};

	const withDraw = () => {
		console.log('withDraw');
	};

	return (
		<div className="account-info-container">
			<div className="account-info-header-container">
				<button type="button" onClick={() => history.goBack()}>
					<IoArrowBack color="#f2f2f2" className="account-info-header-icn" />
				</button>
				<div className="account-info-header-title">계정 정보</div>
				<div className="account-info-header-icn" />
			</div>
			<div className="account-info-body-wrapper mt4rem">
				<div className="account-info-body-container">
					<button type="button" className="account-info-body-account-container">
						<div className="account-info-body-account-title">계정 이메일</div>
						<div className="account-info-body-account-id">{userId}</div>
					</button>
					<button type="button" className="account-info-body-change-pw-container" onClick={changePw}>
						<div className="account-info-column">
							<div className="account-info-body-change-pw-title">비밀번호 변경</div>
							<div className="account-info-body-change-pw-text">등록된 비밀번호를 변경합니다.</div>
						</div>
						<IoChevronForward className="account-info-header-icn e2e2e2" />
					</button>
					<button type="button" className="account-info-body-logout" onClick={logout}>
						<div>로그아웃</div>
						<IoChevronForward className="account-info-header-icn e2e2e2" />
					</button>
					<button
						type="button"
						className="account-info-body-change-pw-container bgececec mb17_625rem"
						onClick={withDraw}
					>
						<div className="account-info-column">
							<div className="account-info-body-change-pw-title b4b4b4">서비스 탈퇴</div>
							<div className="account-info-body-change-pw-text b4b4b4">탈퇴한 계정의 정보는 복구할 수 없습니다.</div>
						</div>
						<IoChevronForward className="account-info-header-icn b4b4b4 " />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountInfoPresenter;

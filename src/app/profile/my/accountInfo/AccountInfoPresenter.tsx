import React from 'react';
import './styles.scss';
import { IoArrowBack, IoChevronForward } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import usePatchLogout from '@src/hooks/remotes/user/usePatchLogout';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

interface AccountInfoPresenterProps {
	userId: string;
}

const AccountInfoPresenter = ({ userId }: AccountInfoPresenterProps): JSX.Element => {
	const history = useHistory();
	const { openModal } = useModal();
	const logout = usePatchLogout();
	const { openSnackbar } = useSnackbar();

	const changePw = () => {
		history.push('/reset-password');
	};

	const handleLogout = () => {
		logout.mutate();
	};

	const showWithdrawSnackbar = () => {
		openSnackbar('탈퇴가 완료되었습니다.');
	};

	const withDraw = () => {
		openModal(ModalKeyEnum.WithdrawModal, { showWithdrawSnackbar });
	};

	return (
		<div className="account-info-container">
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
					<button type="button" className="account-info-body-logout" onClick={handleLogout}>
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

import { Box, Typography } from '@material-ui/core';
import Modal from '@src/components/common/modal/Modal';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './loginModal.scss';

const LoginModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<Modal open={open} onClose={onClose} isFullHeight>
			<Box className="login-modal-con">
				<IoClose className="login-modal-close-icon" color="#212b36" onClick={() => onClose(false)} />
				<Box className="login-modal-body-con">
					<Typography>중대본</Typography>
					<Box className="login-modal-body-subtitle">스터디, 중앙대 안에서 찾아보세요!</Box>
					<CommonTextField
						className="login-modal-body-login-input"
						value={email}
						label="포탈 이메일"
						onChange={(e) => setEmail(e.target.value)}
						textFieldProps={{ type: 'email' }}
					/>
					<CommonTextField
						className="login-modal-body-pw-input"
						value={password}
						label="비밀번호"
						onChange={(e) => setPassword(e.target.value)}
						textFieldProps={{ type: 'password' }}
					/>
				</Box>
			</Box>
		</Modal>
	);
};

export default LoginModal;

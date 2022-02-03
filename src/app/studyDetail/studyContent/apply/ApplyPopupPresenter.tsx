import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import './index.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCloseOutline } from 'react-icons/io5';
import { Button, Switch } from '@material-ui/core';

interface ApplyPopupPresenterProps {
	applySheetVisible: boolean;
	setApplySheetVisible: (param: boolean) => void;
}

const Content = ({ setApplySheetVisible }: Omit<ApplyPopupPresenterProps, 'applySheetVisible'>): JSX.Element => {
	const [disabled, setDisabled] = useState(false);

	const [value, setValue] = useState('시와 별 이름을 가을로 위로무에 하나에 있습니다. 새겨지는 같이 어머니 있습니다.');
	const [isPublic, setIsPublic] = useState(false);
	const handleClose = () => {
		setApplySheetVisible(false);
	};

	const onChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(evt.target.value);
	};

	useEffect(() => {
		setDisabled(value.length < 5);
	}, [value]);

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(evt.target.checked);
	};

	const handleClick = () => {
		const request = {
			tempBio: value,
		};
		// TODO 스터디 신청 API 연동
		console.info(request);
	};
	return (
		<div className="profile-bottom-sheet-container">
			<div className="title-container">
				<span className="title">스터디 신청</span>
				<IoCloseOutline onClick={handleClose} size={24} className="close-icon" />
			</div>
			<div className="sub-title-container">
				<span className="sub-title">한줄 소개글</span>
			</div>
			<textarea maxLength={60} className="text-area" value={value} onChange={onChange} />
			<div
				className="sub-title-container"
				style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<span className="sub-title">학과정보 공개</span>
				<Switch className="switch" onChange={handleChange} checked={isPublic} />
			</div>
			<div className="helper-text">
				<span>이 부분 유도 텍스트 들어가는 곳</span>
			</div>
			<Button className="apply-button" disabled={disabled} onClick={handleClick}>
				신청하기!
			</Button>
		</div>
	);
};

const ApplyPopupPresenter = ({ applySheetVisible, setApplySheetVisible }: ApplyPopupPresenterProps): JSX.Element => {
	const { width: windowWidth } = useWindowDimensions();

	if (windowWidth > 1024) {
		return (
			<Popup open={applySheetVisible} onClose={() => setApplySheetVisible(false)} position="center center">
				<Content setApplySheetVisible={setApplySheetVisible} />
			</Popup>
		);
	}
	return (
		<BottomSheet open={applySheetVisible} onDismiss={() => setApplySheetVisible(false)}>
			<Content setApplySheetVisible={setApplySheetVisible} />
		</BottomSheet>
	);
};

export default ApplyPopupPresenter;

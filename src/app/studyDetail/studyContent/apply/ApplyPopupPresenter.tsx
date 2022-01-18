import useWindowDimensions from '@src/hooks/useWindowDimensions';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BottomSheet, BottomSheetProps } from 'react-spring-bottom-sheet';
import './index.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoCloseOutline } from 'react-icons/io5';
import { Button, Switch } from '@material-ui/core';

interface ApplyPopupPresenterProps {
	applySheetVisible: boolean;
	setApplySheetVisible: (param: boolean) => void;
}

const ApplyPopupPresenter = ({ applySheetVisible, setApplySheetVisible }: ApplyPopupPresenterProps): JSX.Element => {
	const { width: windowWidth } = useWindowDimensions();

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

	const Content = () => (
		<div className="profile-bottom-sheet-container">
			<div className="titleContainer">
				<span className="title">스터디 신청</span>
				<IoCloseOutline onClick={handleClose} size={24} className="closeIcon" />
			</div>
			<div className="subTitleContainer">
				<span className="subTitle">한줄 소개글</span>
			</div>
			<textarea maxLength={60} onChange={onChange} className="textArea" value={value} />
			<div
				className="subTitleContainer"
				style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<span className="subTitle">학과정보 공개</span>
				<Switch onChange={handleChange} checked={isPublic} />
			</div>
			<div className="helperText">
				<span>이 부분 유도 텍스트 들어가는 곳</span>
			</div>
			<Button className="applyButton" disabled={disabled}>
				신청하기!
			</Button>
		</div>
	);

	if (windowWidth > 1024) {
		return (
			<Popup open={applySheetVisible} onClose={() => setApplySheetVisible(false)} position="center center">
				<Content />
			</Popup>
		);
	}
	return (
		<BottomSheet open={applySheetVisible} onDismiss={() => setApplySheetVisible(false)}>
			<Content />
		</BottomSheet>
	);
};

export default ApplyPopupPresenter;

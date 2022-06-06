import { Box } from '@material-ui/core';
import React from 'react';
import './index.scss';

const EmptyMessage = (): JSX.Element => {
	return (
		<Box className="empty-message-con">
			<img
				className="empty-message-img"
				alt=""
				src={require('@src/assets/img/illustration/emptyListImg.svg').default}
			/>
			<Box className="empty-message-text">스터디 없음</Box>
			<Box className="empty-message-subtext">‘스터디 등록’ 을 눌러 모집을 시작해보세요!</Box>
		</Box>
	);
};

export default EmptyMessage;

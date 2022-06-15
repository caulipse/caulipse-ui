import { Box } from '@material-ui/core';
import React from 'react';
import './index.scss';

const EmptyMessage = (): JSX.Element => {
	return (
		<Box className="empty-message-con">
			<img
				className="empty-message-img"
				alt=""
				src={require('@src/assets/img/illustration/emptyParticipantsImage.svg').default}
			/>
			<Box className="empty-message-text">아직 스터디원이 없어요 :(</Box>
			<Box className="empty-message-subtext">‘신청하기’를 눌러 첫번째 스터디원이 되어보세요!</Box>
		</Box>
	);
};

export default EmptyMessage;

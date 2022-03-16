import React from 'react';
import './styles.scss';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { Notice } from '@src/api/types';
import NoticeItem from './NoticeItem';

interface NoticePresenterProps {
	notices: Notice[];
}

const NoticePresenter = ({ notices }: NoticePresenterProps): JSX.Element => {
	return (
		<>
			<div className="notice-presenter-list-container">
				<div className="notice-presenter-list-max-width">
					{notices.map((item) => (
						<NoticeItem key={item.id} noticeItem={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default NoticePresenter;

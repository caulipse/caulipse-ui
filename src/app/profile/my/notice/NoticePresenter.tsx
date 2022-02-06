import { NoticeInterface } from '@src/store/modules/user';
import React from 'react';
import './styles.scss';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import NoticeItem from './NoticeItem';

interface NoticePresenterProps {
	notices: NoticeInterface[];
}

const NoticePresenter = ({ notices }: NoticePresenterProps): JSX.Element => {
	const history = useHistory();

	return (
		<>
			<div className="notice-presenter-header-container">
				<button type="button" onClick={() => history.goBack()}>
					<IoArrowBack size={24} color="#f7f7f7" />
				</button>
				<div className="notice-presenter-header-title">공지사항</div>
				<div />
			</div>
			<div className="notice-presenter-list-container">
				<div className="notice-presenter-list-max-width">
					{notices.map((item) => (
						<NoticeItem key={item.noticeId} noticeItem={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default NoticePresenter;

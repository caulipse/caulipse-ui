import { format } from 'date-fns';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { NoticeInterface } from '../../interface/interface';
import './styles.scss';

interface NoticeDetailPresenterProps {
	notice: NoticeInterface;
}

const NoticeDetailPresenter = ({ notice }: NoticeDetailPresenterProps): JSX.Element => {
	const history = useHistory();

	return (
		<div className="notice-detail-container">
			<div className="notice-detail-header">
				<button type="button" onClick={() => history.goBack()}>
					<IoArrowBack size={24} color="#f7f7f7" />
				</button>
			</div>
			<div className="notice-detail-content-container">
				<div className="notice-detail-created-at">{format(notice.createdAt, 'yyyy-MM-dd')}</div>
				<div className="notice-detail-title">{notice.title}</div>
				<div className="notice-detail-content">{notice.content}</div>
			</div>
		</div>
	);
};

export default NoticeDetailPresenter;

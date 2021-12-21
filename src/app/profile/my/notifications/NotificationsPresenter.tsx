import React from 'react';
import { BookmarkInterface } from '../../interface/interface';
import './index.scss';
import NotiItem from './NotiItem';

interface NotificationsPresenterProps {
	notifications: BookmarkInterface[];
}

const NotificationsPresenter = ({ notifications }: NotificationsPresenterProps): JSX.Element => {
	return (
		<div className="notifications-container">
			<div className="notifications-header-container">
				<div className="notifications-header-title">알림 ({notifications?.length ?? 0})</div>
				<button type="button">
					<div className="notifications-header-more">더보기</div>
				</button>
			</div>
			{notifications?.slice(0, 2)?.map((item, index, {length}) => (
				<NotiItem key={item.studyId} isDivider={index!==length-1} notification={item} />
			))}
		</div>
	);
};

export default NotificationsPresenter;
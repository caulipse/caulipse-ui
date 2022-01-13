import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { BookmarkInterface } from '../../interface/interface';
import './index.scss';

interface NotiItemProps {
	notification: BookmarkInterface;
	isDivider?: boolean;
}

const NotiItem = ({ notification, isDivider }: NotiItemProps): JSX.Element => {
	return (
		<button type="button">
			<div className={`notiItem-container ${isDivider ? 'notiItem-divider' : ''}`}>
				<div className="notiItem-content-container">
					<div className="notiItem-category-date">
						<span className="notiItem-category">{notification.category}</span>
						<span className="notiItem-date">2시간 전</span>
					</div>
					<div className="notiItem-title">{notification.title}</div>
				</div>
				<IoChevronForward size={24} color="#b1b1b1" />
			</div>
		</button>
	);
};

NotiItem.defaultProps = {
	isDivider: false,
};

export default NotiItem;

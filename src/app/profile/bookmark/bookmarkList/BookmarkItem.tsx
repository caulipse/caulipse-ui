import React, { useCallback } from 'react';
import { Study } from '@src/api/types';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import Chip from '@src/components/common/chip/Chip';
import { ChipTypeEnum } from '@src/components/common/chip/types';
import { Container, IconButton } from '@material-ui/core';
import { IoBookmark } from 'react-icons/io5';
import './BookmarkList.scss';
import ProgressBar from '@src/components/common/progress/ProgressBar';
import classNames from 'classnames';

interface BookmarkItemProps {
	item: Study;
	isBlurred?: boolean;
	isBottomMargin?: boolean;
}

const BookmarkItem = ({ item, isBlurred, isBottomMargin = false }: BookmarkItemProps): JSX.Element => {
	const LeftTopComponent = useCallback(() => {
		return (
			<div>
				<Chip selected label="D-18" type={ChipTypeEnum.secondary} />
			</div>
		);
	}, []);

	const RightTopComponent = useCallback(() => {
		return (
			<IconButton>
				<IoBookmark className="bookmark-item-bookmark" />
			</IconButton>
		);
	}, []);

	return (
		<MyStudyCard
			leftTopComponent={<LeftTopComponent />}
			rightTopComponent={<RightTopComponent />}
			studyId={item.id}
			title={item.title}
			createdAt={item.createdAt}
			views={item.views}
			bookmarks={0}
			bottomComponent={<ProgressBar current={item.membersCount} max={item.capacity} />}
			className={classNames({ 'mb-438rem': isBottomMargin })}
		/>
	);
};

BookmarkItem.defaultProps = {
	isBlurred: false,
};

export default BookmarkItem;

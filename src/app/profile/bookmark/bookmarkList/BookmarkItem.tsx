import React, { useCallback } from 'react';
import { Study } from '@src/api/types';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import Chip from '@src/components/common/chip/Chip';
import { ChipTypeEnum } from '@src/components/common/chip/types';
import { IoBookmark, IoClose } from 'react-icons/io5';
import './BookmarkList.scss';
import ProgressBar from '@src/components/common/progress/ProgressBar';
import classNames from 'classnames';
import useDeleteBookmark from '@src/hooks/remotes/bookmark/useDeleteBookmark';

interface BookmarkItemProps {
	item: Study;
	isBlurred?: boolean;
	isBottomMargin?: boolean;
}

const BookmarkItem = ({ item, isBlurred, isBottomMargin = false }: BookmarkItemProps): JSX.Element => {
	const deleteBookmark = useDeleteBookmark(item.id);

	const LeftTopComponent = useCallback(() => {
		return (
			<div>
				<Chip selected label="D-18" type={ChipTypeEnum.secondary} />
			</div>
		);
	}, []);

	const RightTopComponent = useCallback(() => {
		return (
			<IoBookmark
				className="bookmark-item-bookmark"
				onClick={(event: any) => {
					event.preventDefault();
					deleteBookmark.mutate();
				}}
			/>
		);
	}, [deleteBookmark]);

	return (
		<MyStudyCard
			leftTopComponent={isBlurred ? undefined : <LeftTopComponent />}
			rightTopComponent={isBlurred ? undefined : <RightTopComponent />}
			rightComponent={
				isBlurred ? (
					<IoClose
						onClick={(event: any) => {
							event.preventDefault();
							deleteBookmark.mutate();
						}}
						className="bookmark-item-close-icon"
					/>
				) : undefined
			}
			studyId={item.id}
			title={item.title}
			isTitleBlur={isBlurred}
			createdAt={item.createdAt}
			views={item.views}
			bookmarks={0}
			bottomComponent={isBlurred ? undefined : <ProgressBar current={item.membersCount} max={item.capacity} />}
			className={classNames({ 'mb-438rem': isBottomMargin })}
		/>
	);
};

BookmarkItem.defaultProps = {
	isBlurred: false,
};

export default BookmarkItem;

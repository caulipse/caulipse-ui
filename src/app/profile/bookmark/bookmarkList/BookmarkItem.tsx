import React, { useCallback } from 'react';
import { Study } from '@src/api/types';
import MyStudyCard from '@src/app/shared/components/myStudyCard';
import { IoBookmark, IoClose } from 'react-icons/io5';
import './BookmarkList.scss';
import ProgressBar from '@src/components/common/progress/ProgressBar';
import classNames from 'classnames';
import useDeleteBookmark from '@src/hooks/remotes/bookmark/useDeleteBookmark';
import { Box } from '@material-ui/core';
import { differenceInDays } from 'date-fns';

interface BookmarkItemProps {
	item: Study;
	isBlurred?: boolean;
	isBottomMargin?: boolean;
}

const BookmarkItem = ({ item, isBlurred, isBottomMargin = false }: BookmarkItemProps): JSX.Element => {
	const deleteBookmark = useDeleteBookmark(item.id);

	const LeftTopComponent = useCallback(() => {
		return <Box className="bookmark-item-chip">D-{differenceInDays(new Date(item.dueDate), new Date())}</Box>;
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

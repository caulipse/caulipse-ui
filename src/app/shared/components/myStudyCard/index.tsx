import { Box } from '@material-ui/core';
import classNames from 'classnames';
import format from 'date-fns/format';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface MyStudyCardProps {
	studyId: string;
	title: string;
	createdAt: string;
	views: number;
	bookmarks: number;
	isTitleBlur?: boolean;
	leftTopComponent?: React.ReactElement;
	rightTopComponent?: React.ReactElement;
	rightComponent?: React.ReactElement;
	bottomComponent?: React.ReactElement;
	className?: string;
}

const MyStudyCard = ({
	studyId,
	title,
	createdAt,
	views,
	bookmarks,
	leftTopComponent,
	rightTopComponent,
	bottomComponent,
	rightComponent,
	className,
	isTitleBlur = false,
}: MyStudyCardProps): JSX.Element => {
	return (
		<Link className={classNames('my-study-card-container', className)} to={`/study/detail/${studyId}`}>
			<Box className="my-study-card-header">
				{leftTopComponent}
				{rightTopComponent}
			</Box>
			<Box className="my-study-card-row-container">
				<Box className="my-study-card-column-container">
					<Box className={classNames('my-study-card-title', { 'my-study-card-blurred-text-color': isTitleBlur })}>
						{title}
					</Box>
					<Box className="my-study-card-text-container">
						<Box className="my-study-card-text">{format(new Date(createdAt), 'yy-MM-dd')}</Box>
						<div className="my-study-card-dot" />
						<Box className="my-study-card-text">조회 {views}</Box>
						<div className="my-study-card-dot" />
						<Box className="my-study-card-text">북마크 {bookmarks}</Box>
					</Box>
				</Box>
				{rightComponent}
			</Box>
			{bottomComponent}
		</Link>
	);
};

export default MyStudyCard;

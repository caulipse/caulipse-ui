import { Box, Button, Container } from '@material-ui/core';
import format from 'date-fns/format';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';

interface MyStudyCardProps {
	studyId: string;
	title: string;
	createdAt: string;
	views: number;
	bookmarks: number;
	leftTopComponent?: React.ReactElement;
	rightTopComponent?: React.ReactElement;
	bottomComponent?: React.ReactElement;
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
}: MyStudyCardProps): JSX.Element => {
	return (
		<Link className="my-study-card-container" to={`/study/detail/${studyId}`}>
			<Container className="my-study-card-header">
				{leftTopComponent}
				{rightTopComponent}
			</Container>
			<Box className="my-study-card-title">{title}</Box>
			<Box className="my-study-card-text-container">
				<Box className="my-study-card-text">{format(new Date(createdAt), 'yy-MM-dd')}</Box>
				<div className="my-study-card-dot" />
				<Box className="my-study-card-text">조회 {views}</Box>
				<div className="my-study-card-dot" />
				<Box className="my-study-card-text">북마크 {bookmarks}</Box>
			</Box>

			{bottomComponent}
		</Link>
	);
};

export default MyStudyCard;

import React, { useEffect, useState } from 'react';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import MainCategoryContainer from '@study/mainCategory/MainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import SubCategoryContainer from '@src/app/study/subCategory/SubCategoryContainer';
import { MainCategoryType } from '@src/types';
import { Container } from '@material-ui/core';
import { IoChevronUp } from 'react-icons/io5';
import './index.scss';

const StudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const onClickCreate = () => {
		// TODO
		// 스터디 등록 모달 연결
	};

	useEffect(() => {
		// TODO
		// API 연동
		console.info(mainCategory);
	}, [mainCategory]);

	return (
		<Container className="study-list-container ">
			<MainCategoryContainer onChange={setMainCategory} />
			{mainCategory && !!mainCategory.subCategories.length && (
				<>
					<SubCategoryContainer mainCategory={mainCategory} />
					<Container className="sub-category-presenter-bottom-bar">
						<IoChevronUp />
					</Container>
				</>
			)}
			<StudyCreateButton onClick={onClickCreate} />
			<StudySortFilterContainer />
			<StudyListContainter />
		</Container>
	);
};

export default StudyPage;

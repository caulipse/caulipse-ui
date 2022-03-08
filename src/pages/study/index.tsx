import React, { useEffect, useState } from 'react';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import MainCategoryContainer from '@study/mainCategory/MainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import SubCategoryContainer from '@src/app/study/subCategory/SubCategoryContainer';
import { MainCategoryType } from '@src/const';

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
		<div className="studyPage-con">
			<MainCategoryContainer onChange={setMainCategory} />
			{mainCategory && !!mainCategory.subCategories.length && <SubCategoryContainer mainCategory={mainCategory} />}
			<StudyCreateButton onClick={onClickCreate} />
			<StudySortFilterContainer />
			<StudyListContainter />
		</div>
	);
};

export default StudyPage;

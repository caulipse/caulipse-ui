import React, { useEffect, useState } from 'react';
import useModal from '@src/hooks/modal/useModal';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import ModalKeyEnum from '@common/modal/enum';
import MainCategoryContainer from '@src/app/study/mainCategory/MainCategoryContainer';
import SubCategoryContainer from '@src/app/study/subCategory/SubCategoryContainer';
import categories, { MainCategoryType, CategoryType } from '@src/const';

const StudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const [subCategories, setSubCategories] = useState<CategoryType[]>();

	const { openModal } = useModal();

	const onClickSort = () => {
		openModal(ModalKeyEnum.StudySortModal);
	};

	const onClickFilter = () => {
		openModal(ModalKeyEnum.StudyFilterModal);
	};

	const onClickCreate = () => {
		// TODO
		// 스터디 등록 모달 연결
	};

	useEffect(() => {
		// TODO
		// API 연동
		console.info(mainCategory);
		// FIXME
		// 하위 카테고리 set
	}, [mainCategory]);

	return (
		<div className="studyPage-con">
			<MainCategoryContainer onChange={setMainCategory} />
			<SubCategoryContainer mainCategory={mainCategory} />
			<StudyCreateButton onClick={onClickCreate} />
			<StudyListContainter onClickSort={onClickSort} onClickFilter={onClickFilter} />
		</div>
	);
};

export default StudyPage;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import MainCategoryContainer from '@study/mainCategory/MainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import SubCategoryContainer from '@src/app/study/subCategory/SubCategoryContainer';
import SubCategoryCollapsedPresenter from '@src/app/study/subCategory/SubCategoryCollapsedPresenter';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container } from '@material-ui/core';
import './index.scss';

const StudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const [state, setState] = useAtom(studyListState);

	const { selectedSubCategories } = state;

	const onClickCreate = () => {
		// TODO
		// 스터디 등록 모달 연결
	};

	useEffect(() => {
		// TODO
		// API 연동
		setState({ ...state, selectedSubCategories: [] as CategoryType[] });
	}, [mainCategory]);

	const element = useRef(null);
	const [collapse, setCollapse] = useState(false);

	const onScroll = useCallback(([entry]) => {
		setCollapse(!entry.isIntersecting);
	}, []);

	useEffect(() => {
		let observer: any;

		if (element.current) {
			observer = new IntersectionObserver(onScroll, { threshold: 1 });
			observer.observe(element.current);
		}

		return () => observer && observer.disconnect();
	}, [onScroll]);

	const onClick = (category: CategoryType) => {
		setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
	};

	return (
		<Container className="study-list-container ">
			<MainCategoryContainer onChange={setMainCategory} />
			{collapse ? (
				selectedSubCategories?.length && (
					<SubCategoryCollapsedPresenter selectedSubCategories={selectedSubCategories} onClick={onClick} />
				)
			) : (
				<SubCategoryContainer mainCategory={mainCategory} />
			)}
			<br ref={element} className="sub-category-presenter-container-ref" />
			<StudyCreateButton onClick={onClickCreate} />
			<StudySortFilterContainer />
			<StudyListContainter />
		</Container>
	);
};

export default StudyPage;

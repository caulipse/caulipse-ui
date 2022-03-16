import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import MainCategoryContainer from '@study/mainCategory/MainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import SubCategoryContainer from '@src/app/study/subCategory/SubCategoryContainer';
import SubCategoryCollapsedPresenter from '@src/app/study/subCategory/SubCategoryCollapsedPresenter';
import SubCategoryItem from '@src/app/study/subCategory/SubCategoryItem';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container, Grid } from '@material-ui/core';
import categories from '@src/const';
import './index.scss';

const StudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const [state, setState] = useAtom(studyListState);

	const { selectedSubCategories } = state;

	let timer: any;

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

	const selectedCategory = useMemo(() => {
		return categories.find((category) => {
			return category.code === mainCategory?.code;
		});
	}, [mainCategory]);

	const onChange = (category: CategoryType) => {
		if (selectedSubCategories.includes(category)) {
			setState({ ...state, selectedSubCategories: selectedSubCategories.filter((item) => item !== category) });
		} else {
			setState({ ...state, selectedSubCategories: selectedSubCategories.concat(category) });
		}
	};

	return (
		<Container className="study-list-container ">
			<MainCategoryContainer onChange={setMainCategory} />
			{collapse ? (
				selectedSubCategories?.length && (
					<SubCategoryCollapsedPresenter selectedSubCategories={selectedSubCategories} onClick={onClick} />
				)
			) : mainCategory && !!mainCategory.subCategories.length ? (
				<Container className="sub-category-presenter-container">
					{!!selectedCategory && (
						<Grid container className="sub-category-presenter-item-container">
							{selectedCategory?.subCategories?.map((category) => (
								<SubCategoryItem
									key={category.code}
									category={category}
									onClick={onChange}
									selected={selectedSubCategories.includes(category)}
								/>
							))}
						</Grid>
					)}
				</Container>
			) : (
				<></>
			)}
			<Container ref={element} className="sub-category-presenter-container-ref">
				<></>
			</Container>
			<StudyCreateButton onClick={onClickCreate} />
			<StudySortFilterContainer />
			<StudyListContainter />
		</Container>
	);
};

export default StudyPage;

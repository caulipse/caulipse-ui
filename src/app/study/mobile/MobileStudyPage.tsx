import React, { useCallback, useEffect, useRef, useState } from 'react';
import StudyList from '@src/app/study/studyList/StudyList';
import StudyCreateButton from '@src/app/study/mobile/studyCreateButton/StudyCreateButton';
import MobileMainCategoryContainer from '@src/app/study/mobile/mainCategory/MobileMainCategoryContainer';
import StudySortFilterContainer from '@study/studySortFilter/StudySortFilterContainer';
import SubCategoryContainer from '@src/app/study/mobile/subCategory/SubCategoryContainer';
import SubCategoryCollapsedPresenter from '@src/app/study/mobile/subCategory/SubCategoryCollapsedPresenter';
import { useAtom } from 'jotai';
import globalState, { studyListState } from '@src/state';
import { MainCategoryType, CategoryType } from '@src/types';
import { Container } from '@material-ui/core';
import './index.scss';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@src/components/common/modal/enum';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import { useHistory, useLocation } from 'react-router-dom';

const MobileStudyPage = (): JSX.Element => {
	const [mainCategory, setMainCategory] = useState<MainCategoryType>();
	const [state, setState] = useAtom(studyListState);
	const [gState] = useAtom(globalState);
	const { openModal } = useModal();
	const { openSnackbar } = useSnackbar();

	const { filterOption } = state;

	const onClickCreate = () => {
		if (!gState.login) {
			openModal(ModalKeyEnum.LoginModal, { history, openSnackbar });
			return;
		}
		openModal(ModalKeyEnum.StudyPostModal);
	};

	const history = useHistory();
	const location = useLocation();
	const { pathname } = location;

	const path = pathname.split('study/')[1];

	useEffect(() => {
		if (mainCategory) {
			history.push(`/study/${mainCategory.path}`);
		}
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
		setState({
			...state,
			filterOption: { ...filterOption, categoryCode: filterOption?.categoryCode?.filter((item) => item !== category) },
		});
	};

	const categories = filterOption?.categoryCode?.filter((item) => item.code % 100);
	return (
		<Container className="study-list-container">
			<MobileMainCategoryContainer onChange={setMainCategory} />
			{collapse ? (
				filterOption?.categoryCode?.length && (
					<SubCategoryCollapsedPresenter selectedSubCategories={categories} onClick={onClick} />
				)
			) : (
				<SubCategoryContainer />
			)}
			<br ref={element} className="sub-category-presenter-container-ref" />
			<StudyCreateButton onClick={onClickCreate} />
			<StudySortFilterContainer />
			<StudyList />
		</Container>
	);
};

export default MobileStudyPage;

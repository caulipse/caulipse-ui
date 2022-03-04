import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import useModal from '@src/hooks/modal/useModal';
import './styles.scss';
import SubCategoryBarContainer from '@src/app/study/subCategoryBar/SubCategoryBarContainer';
import StudyListContainter from '@src/app/study/studyList/StudyListContainer';
import StudyCategoryBarContainer from '@src/app/study/studyCategoryBar/StudyCategoryBarContainer';
import StudyCreateButton from '@study/studyCreateButton/StudyCreateButton';
import ModalKeyEnum from '@common/modal/enum';

const CategoryObj = {
	employment: '취업, 면접',
	certificate: '자격증',
	programming: '프로그래밍',
	etc: '생활 기타',
};
const StudyPage = (): JSX.Element => {
	const location = useLocation();
	const history = useHistory();
	const { category } = useParams<any>();
	const [studyCategory, setStudyCategory] = useState<string>('');
	const [selectedList, setSelectedList] = useState<string[]>([]);

	const { openModal } = useModal();

	const getValueFromCategoryObj = (key: string) => {
		const path = key.split('/')[2];
		const result = Object.keys(CategoryObj).indexOf(path);
		setStudyCategory(Object.values(CategoryObj)[result]);
	};
	const addSubCategory = (c: string) => {
		setSelectedList(() => [...selectedList, c]);
	};
	const rmSubCategory = (c: string) => {
		const newSelectedList = selectedList.filter((item) => item !== c);
		setSelectedList(newSelectedList);
	};
	useEffect(() => {
		if (studyCategory === '') {
			getValueFromCategoryObj(location.pathname);
		}
		if (category === undefined) {
			history.push('/study/employment');
		}
	}, [studyCategory]);

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

	return (
		<div className="studyPage-con">
			<div>
				<StudyCategoryBarContainer />
			</div>
			<div className="studyPage-Toolbar-con">
				<div className="studyPage-Toolbar-wrap">
					<SubCategoryBarContainer addSubCategory={addSubCategory} rmSubCategory={rmSubCategory} />
				</div>
			</div>
			<StudyCreateButton onClick={onClickCreate} />
			<StudyListContainter onClickSort={onClickSort} onClickFilter={onClickFilter} />
		</div>
	);
};

export default StudyPage;

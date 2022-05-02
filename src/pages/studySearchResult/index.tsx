import { Box, Button } from '@material-ui/core';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import EmptyComponent from '@src/app/shared/components/emptyComponents';
import StudySortFilterContainer from '@src/app/study/studySortFilter/StudySortFilterContainer';
import Loader from '@src/components/common/loader/Loader';
import ModalKeyEnum from '@src/components/common/modal/enum';
import useModal from '@src/hooks/modal/useModal';
import useFetchSearchResult from '@src/hooks/remotes/study/useFetchSearchResult';
import React from 'react';
import { IoArrowForward, IoChevronForward, IoClose } from 'react-icons/io5';
import { useLocation, useHistory } from 'react-router-dom';
import './index.scss';

interface StudySearchResultPageProps {
	searchKeyword?: string;
}

const StudySearchResultPage = (): JSX.Element => {
	const location = useLocation<StudySearchResultPageProps>();
	const history = useHistory();
	const searchKeyword = location.state?.searchKeyword;
	const { openModal } = useModal();
	const { data, isLoading } = useFetchSearchResult(searchKeyword ?? '');

	const goToSearch = () => {
		openModal(ModalKeyEnum.StudySearchModal, {
			onSearch: (searchText: string) => {
				history.push({ pathname: '/study/search', state: { searchKeyword: searchText } });
			},
		});
	};

	if (isLoading) return <Loader />;

	return (
		<>
			<Box className="search-result-header-con">
				<Box className="search-result-header-text-con" onClick={goToSearch}>
					<Box className="search-result-header-text">{searchKeyword}</Box>
					<IoClose className="search-result-icon" color="#4c4c4c" onClick={() => history.goBack()} />
				</Box>
			</Box>
			<Box className="search-result-desktop-con">
				<Button
					className="search-result-recruit-btn"
					variant="contained"
					endIcon={<IoChevronForward className="search-result-icon" color="#0170f2" />}
				>
					지금 바로 스터디원을 모집해보세요!
				</Button>
				<Box className="search-result-desktop-content-con">
					<StudySortFilterContainer />
					<Box className="search-result-divider" />
					{data ? (
						data?.map((item) => {
							return (
								<div key={item.id} className="mt1_5rem">
									<StudyCardContainer study={item} />
								</div>
							);
						})
					) : (
						<EmptyComponent
							title="검색 결과가 없습니다."
							buttonText="스터디 찾아보기"
							onClick={() => {
								history.push('/');
							}}
						/>
					)}
				</Box>
			</Box>
		</>
	);
};

export default StudySearchResultPage;

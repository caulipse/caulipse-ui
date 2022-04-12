import { Box } from '@material-ui/core';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import StudySortFilterContainer from '@src/app/study/studySortFilter/StudySortFilterContainer';
import Loader from '@src/components/common/loader/Loader';
import useFetchSearchResult from '@src/hooks/remotes/study/useFetchSearchResult';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useLocation, useHistory } from 'react-router-dom';
import './index.scss';

interface StudySearchResultPageProps {
	searchKeyword?: string;
}

const StudySearchResultPage = (): JSX.Element => {
	const location = useLocation<StudySearchResultPageProps>();
	const history = useHistory();
	const searchKeyword = location.state?.searchKeyword;
	const { data, isLoading } = useFetchSearchResult(searchKeyword ?? '');

	if (isLoading) return <Loader />;

	return (
		<>
			<Box className="search-result-header-con">
				<Box className="search-result-header-text-con">
					<Box className="search-result-header-text">{searchKeyword}</Box>
					<IoClose className="search-result-icon" color="#4c4c4c" onClick={() => history.goBack()} />
				</Box>
			</Box>
			<StudySortFilterContainer />
			<Box className="search-result-divider" />
			{data?.studies.map((item, index, { length }) => {
				return (
					<div key={item.id} className="mt1_5rem">
						<StudyCardContainer study={item} />
					</div>
				);
			})}
		</>
	);
};

export default StudySearchResultPage;

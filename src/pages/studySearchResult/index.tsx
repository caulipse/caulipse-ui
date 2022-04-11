import React from 'react';
import { useLocation } from 'react-router-dom';

interface StudySearchResultPageProps {
	searchKeyword?: string;
}

const StudySearchResultPage = (): JSX.Element => {
	const location = useLocation<StudySearchResultPageProps>();
	const searchKeyword = location.state?.searchKeyword;

	console.log('searchkeyword, ', searchKeyword);

	return <div>StudySearchResultPage</div>;
};

export default StudySearchResultPage;

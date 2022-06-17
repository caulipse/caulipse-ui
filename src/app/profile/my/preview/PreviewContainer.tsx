import useFetchBookmarks from '@src/hooks/remotes/bookmark/useFetchBookmarks';
import useFetchAppliedStudies from '@src/hooks/remotes/user/useFetchAppliedStudies';
import useFetchMyStudies from '@src/hooks/remotes/user/useFetchMyStudies';
import React from 'react';
import PreviewPresenter from './PreviewPresenter';

const PreviewContainer = (): JSX.Element => {
	const { data: bookmarkData } = useFetchBookmarks();
	const { data: appliedStudyData } = useFetchAppliedStudies();
	const { data: recruitingStudyData } = useFetchMyStudies();

	return (
		<div>
			<PreviewPresenter
				bookmarkNum={bookmarkData?.filter((item) => item.isOpen)?.length ?? 0}
				applyNum={appliedStudyData?.filter((item) => item.isOpen)?.length ?? 0}
				recruitNum={recruitingStudyData?.filter((item) => item.isOpen)?.length ?? 0}
			/>
		</div>
	);
};

export default PreviewContainer;

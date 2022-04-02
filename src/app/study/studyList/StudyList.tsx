import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import React, { RefObject, memo, useState, useEffect, useMemo, useRef } from 'react';
import { Container } from '@material-ui/core';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import Loader from '@common/loader/Loader';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { Study } from '@api/types';
import useIntersectionObserver from '@src/hooks/common/useIntersectionObserver';
import './index.scss';

const StudyList = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);
	const { data, isLoading } = fetchStudies(state?.sortOption?.value, state?.filterOption);

	const target = useRef<HTMLDivElement>(null);
	const isOnScreen = useIntersectionObserver(target);

	const [studies, setStudies] = useState([] as Study[]);

	const { pageNo: page } = state?.filterOption;
	const totalPage = useMemo(() => {
		return data?.pages ?? 0;
	}, [data]);

	useEffect(() => {
		if (data?.studies) setStudies(studies.concat(data?.studies));
	}, [data]);

	useEffect(() => {
		if (isOnScreen && page && page < totalPage) {
			setState({ ...state, filterOption: { ...state?.filterOption, pageNo: page + 1 } });
		}
	}, [isOnScreen]);

	return (
		<div className="studyList-con">
			<div className="studyList-wrap">
				<div className="studyList-listAndBoards-con">
					<div className="studyList">
						{studies?.map((study) => (
							<StudyCardContainer study={study} key={study.id} />
						))}
					</div>
				</div>
			</div>
			<Container ref={(target as unknown) as RefObject<HTMLDivElement> | null}>{isLoading && <Loader />}</Container>
		</div>
	);
};

export default memo(StudyList);

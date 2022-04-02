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

	const { filterOption, sortOption, paginationOption } = state;
	const { pageNo } = paginationOption;

	const { data, isLoading } = fetchStudies(sortOption?.value, filterOption, paginationOption);

	const totalPage = useMemo(() => {
		return data?.pages ?? 0;
	}, [data]);

	const target = useRef<HTMLDivElement>(null);
	const isOnScreen = useIntersectionObserver(target);

	const [studies, setStudies] = useState([] as Study[]);

	useEffect(() => {
		if (data?.message === '요청에 해당하는 스터디가 존재하지 않습니다') {
			setStudies([] as Study[]);
			return;
		}
		if (!data?.studies) return;
		if (pageNo === 1) {
			setStudies(data?.studies);
		} else {
			setStudies(studies.concat(data?.studies));
		}
	}, [data]);

	useEffect(() => {
		if (isOnScreen && pageNo && pageNo < totalPage) {
			setState({ ...state, paginationOption: { ...state?.paginationOption, pageNo: pageNo + 1 } });
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

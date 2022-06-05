import React, { useMemo, useState, useRef, useEffect, RefObject } from 'react';
import { Container, Typography } from '@material-ui/core';
import Loader from '@common/loader/Loader';
import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import { Study } from '@api/types';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import useIntersectionObserver from '@src/hooks/common/useIntersectionObserver';
import { orderByMapper } from '@src/app/shared/utils/studyMapper';
import './index.scss';

const DesktopMainPageStudyList = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);

	const { filterOption, paginationOption } = state;
	const { pageNo } = paginationOption;

	const { data, isLoading } = fetchStudies(Object.keys(orderByMapper)[0], filterOption, paginationOption);

	const totalPage = useMemo(() => {
		return data?.pages ?? 0;
	}, [data]);

	const target = useRef<HTMLDivElement>(null);
	const isOnScreen = useIntersectionObserver(target);

	const [studies, setStudies] = useState([] as Study[]);

	useEffect(() => {
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
		<Container className="desktop-main-page-study-list-container">
			<Typography>👷🏻 지금은 베타서비스 기간입니다. 많은 의견 부탁드려요! 😀</Typography>
			{studies?.map((study) => (
				<StudyCardContainer study={study} key={study.id} />
			))}
			<Container ref={target as unknown as RefObject<HTMLDivElement> | null}>{isLoading && <Loader />}</Container>
		</Container>
	);
};

export default DesktopMainPageStudyList;

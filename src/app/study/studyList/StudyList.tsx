import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import React, { RefObject, memo, useState, useEffect, useMemo, useRef } from 'react';
import { Container } from '@material-ui/core';
import fetchStudies from '@src/hooks/remotes/study/useFetchStudies';
import Loader from '@common/loader/Loader';
import { useAtom } from 'jotai';
import { studyListState } from '@src/state';
import { Study } from '@api/types';
import useIntersectionObserver from '@src/hooks/common/useIntersectionObserver';
import { useLocation } from 'react-router-dom';
import { getMainCategoryCodeFromLabel } from '@src/app/shared/utils/category';

import './index.scss';

const StudyList = (): JSX.Element => {
	const [state, setState] = useAtom(studyListState);

	const { filterOption, sortOption, paginationOption } = state;

	const { pageNo } = paginationOption;

	const { pathname } = useLocation();
	const label = pathname.split('study/')[1];

	const code = useMemo(() => {
		return getMainCategoryCodeFromLabel(label);
	}, [label]);

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
			if (!code) {
				setState({ ...state, paginationOption: { ...state?.paginationOption, pageNo: pageNo + 1 } });
			} else {
				const category = { label, code };
				const duplicate = state?.filterOption?.categoryCode?.find((item) => item.code === code);
				const categoryFilter = state?.filterOption?.categoryCode?.concat(category);
				setState({
					...state,
					filterOption: {
						...state?.filterOption,
						categoryCode: duplicate ? state?.filterOption?.categoryCode : categoryFilter,
					},
					paginationOption: { ...state?.paginationOption, pageNo: pageNo + 1 },
				});
			}
		} else {
			if (!code) return;
			const category = { label, code };
			const duplicate = state?.filterOption?.categoryCode?.find((item) => item.code === code);
			const categoryFilter = state?.filterOption?.categoryCode?.concat(category);
			setState({
				...state,
				filterOption: {
					...state?.filterOption,
					categoryCode: duplicate ? state?.filterOption?.categoryCode : categoryFilter,
				},
			});
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

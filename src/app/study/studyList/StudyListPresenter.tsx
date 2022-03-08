import StudyCardContainer from '@src/app/shared/components/card/StudyCardContainer';
import React from 'react';
import { Study } from '@api/types';
import './index.scss';

interface IStudyListPresenterProps {
	data: Study[] | undefined;
}

const StudyListPresenter = ({ data }: IStudyListPresenterProps): JSX.Element => (
	<div className="studyList-con">
		<div className="studyList-wrap">
			<div className="studyList-listAndBoards-con">
				<div className="studyList">
					{data?.map((study) => (
						<StudyCardContainer study={study} key={study.id} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export default StudyListPresenter;

import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React, { useCallback } from 'react';
import { IoArrowBack, IoBookmarkOutline, IoEllipsisVertical, IoShareSocialOutline } from 'react-icons/io5';
import { useHistory, useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useModal from '@src/hooks/modal/useModal';
import './styles.scss';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import Loader from '@src/components/common/loader/Loader';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import ModalKeyEnum from '@common/modal/enum';
import { Button, IconButton } from '@material-ui/core';
import classNames from 'classnames';

const StudyDetailPage = (): JSX.Element => {
	const history = useHistory();
	const { studyId } = useParams<{ studyId: string }>();
	const { data, isLoading } = useFetchStudy(studyId);
	const studyData = data?.study;

	const { openModal } = useModal();

	const { openSnackbar } = useSnackbar();

	const onClick = () => {
		openModal(ModalKeyEnum.ApplyModal);
	};

	const onClickMore = () => {
		// FIXME
		// 더보기 모달에 접근하려는 사용자가 모집자인지 신청자인지를 구분하는 임시 플래그성 변수
		// API 연동 이후 수정 필요
		if (localStorage.getItem('host') === 'host') {
			openModal(ModalKeyEnum.HostStudyMoreModal);
		} else {
			openModal(ModalKeyEnum.UserStudyMoreModal);
		}
	};

	const url = window.location.href;

	const onClickShare = () => {
		openSnackbar('클립보드에 복사되었습니다.');
	};

	const StudyDetailHeader = useCallback(() => {
		return (
			<div className="backButtonContainer">
				<CopyToClipboard text={url}>
					<IconButton className="mr11" onClick={onClickShare}>
						<IoShareSocialOutline className="icn-btn" color="#ffffff" />
					</IconButton>
				</CopyToClipboard>
				<IconButton type="button" onClick={onClickMore}>
					<IoEllipsisVertical className="icn-btn" color="#ffffff" />
				</IconButton>
			</div>
		);
	}, [url, onClickShare, onClickMore]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="studyDetailContainer">
					<div className="studyDetailBg">
						<StudyDetailHeader />
						{studyData && (
							<StudyInfoContainer
								categoryCode={studyData.categoryCode}
								weekday={studyData.weekday}
								frequency={studyData.frequency}
								location={studyData.location}
							/>
						)}
						{studyData && (
							<StudyContentContainer
								studyId={studyData.id}
								hostId={studyData.HOST_ID}
								createdAt={studyData.createdAt}
								views={studyData.views}
								// bookmarks={studyData.bookmarks}
								title={studyData.title}
								studyAbout={studyData.studyAbout}
							/>
						)}
						<div className="study-apply-btn-container">
							<button type="button" className="study-apply-btn-content" onClick={onClick}>
								신청하기
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default StudyDetailPage;

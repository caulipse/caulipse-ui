/* eslint-disable @typescript-eslint/no-empty-function */
import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React, { useCallback, useMemo } from 'react';
import { IoBookmarkOutline, IoEllipsisVertical, IoPencil, IoShareSocialOutline } from 'react-icons/io5';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useModal from '@src/hooks/modal/useModal';
import './styles.scss';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import Loader from '@src/components/common/loader/Loader';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';
import ModalKeyEnum from '@common/modal/enum';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import CommonButton from '@src/components/common/button/CommonButton';
import usePostBookmark from '@src/hooks/remotes/bookmark/usePostBookmark';
import { useAtom } from 'jotai';
import globalState, { userState as globalUserState } from '@src/state';
import { getMainCategoryCode } from '@src/app/shared/utils/category';
import useWindowDimensions from '@src/hooks/useWindowDimensions';

import bgLanguage from '@src/assets/img/category/imageMobile/language.png';
import bgCertificate from '@src/assets/img/category/imageMobile/certificate.png';
import bgDaily from '@src/assets/img/category/imageMobile/daily.png';
import bgEmployment from '@src/assets/img/category/imageMobile/employment.png';
import bgExam from '@src/assets/img/category/imageMobile/exam.png';
import bgProgramming from '@src/assets/img/category/imageMobile/programming.png';
import bgCompetition from '@src/assets/img/category/imageMobile/competition.png';

import bgLanguageFullWidth from '@src/assets/img/category/imageDesktopFullWidth/language.png';
import bgCertificateFullWidth from '@src/assets/img/category/imageDesktopFullWidth/certificate.png';
import bgDailyFullWidth from '@src/assets/img/category/imageDesktopFullWidth/daily.png';
import bgEmploymentFullWidth from '@src/assets/img/category/imageDesktopFullWidth/employment.png';
import bgExamFullWidth from '@src/assets/img/category/imageDesktopFullWidth/exam.png';
import bgProgrammingFullWidth from '@src/assets/img/category/imageDesktopFullWidth/programming.png';
import bgCompetitionFullWidth from '@src/assets/img/category/imageDesktopFullWidth/competition.png';
import { isFuture, isPast, isToday } from 'date-fns';
import classNames from 'classnames';
import useFetchStudyParticipants from '@src/hooks/remotes/studyUser/useFetchStudyParticipants';

import { differenceInDays } from 'date-fns';

interface StudyDetailPageLocationInterface {
	initialIndex?: number;
}

const categoryImageMapper = (code: number) => {
	switch (code) {
		case 100:
			return bgLanguage;
		case 200:
			return bgEmployment;
		case 300:
			return bgProgramming;
		case 400:
			return bgExam;
		case 500:
			return bgCertificate;
		case 600:
			return bgDaily;
		case 700:
			return bgCompetition;
		default:
			return bgDaily;
	}
};

const categoryImageMapperFullWidth = (code: number) => {
	switch (code) {
		case 100:
			return bgLanguageFullWidth;
		case 200:
			return bgEmploymentFullWidth;
		case 300:
			return bgProgrammingFullWidth;
		case 400:
			return bgExamFullWidth;
		case 500:
			return bgCertificateFullWidth;
		case 600:
			return bgDailyFullWidth;
		case 700:
			return bgCompetitionFullWidth;
		default:
			return bgDailyFullWidth;
	}
};

const StudyDetailPage = (): JSX.Element => {
	const { studyId } = useParams<{ studyId: string }>();
	const postBookmark = usePostBookmark(studyId);
	const { data: studyData, isLoading } = useFetchStudy(studyId);
	const { data: studyParticipantsData, isLoading: isStudyParticipantsLoading } = useFetchStudyParticipants(studyId);

	const location = useLocation<StudyDetailPageLocationInterface>();
	const initialIndex = location.state?.initialIndex ?? 1;

	const { openModal } = useModal();
	const { openSnackbar } = useSnackbar();
	const history = useHistory();
	const [state] = useAtom(globalState);
	const [userState] = useAtom(globalUserState);
	const { width } = useWindowDimensions();

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	const isHost = useMemo(() => {
		return userState.userId === studyData?.HOST_ID;
	}, [studyData]);

	const isAppliedUser = useMemo(() => {
		return !!studyParticipantsData?.find((participantItem) => participantItem.userId === userState.userId);
	}, [studyParticipantsData, userState]);

	const applyDisabled: boolean = useMemo(() => {
		return Boolean(
			studyData?.applied ||
				(studyData?.dueDate && !isToday(new Date(studyData?.dueDate)) && isPast(new Date(studyData?.dueDate)))
		);
	}, [studyData]);

	const onClick = () => {
		if (!state.login) {
			openModal(ModalKeyEnum.LoginModal, { history, openSnackbar });
			return;
		}
		if (isHost) {
			openModal(ModalKeyEnum.StudyCloseModal, studyId);
		} else if (isAppliedUser) {
			openModal(ModalKeyEnum.ApplyCancelModal, studyId);
		} else {
			openModal(ModalKeyEnum.ApplyModal, studyId);
		}
	};

	const onClickMore = () => {
		if (isHost) {
			openModal(ModalKeyEnum.HostStudyMoreModal, studyId);
		} else {
			openModal(ModalKeyEnum.UserStudyMoreModal, studyId);
		}
	};

	const url = window.location.href;

	const onClickShare = () => {
		openSnackbar('클립보드에 복사되었습니다.');
	};

	const onClickPostBookmark = () => {
		if (!state.login) {
			openModal(ModalKeyEnum.LoginModal, { history, openSnackbar });
			return;
		}
		postBookmark.mutate();
	};

	const onClickEdit = () => {
		openModal(ModalKeyEnum.EditStudyModal, { studyData });
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

	const dDay = differenceInDays(new Date(studyData?.dueDate ?? ''), new Date());

	const CTAButtons = useCallback(() => {
		if (!studyData?.isOpen || dDay < 0) return null;

		return (
			<div className="study-apply-btn-container">
				<div className="study-apply-btn-padding-container">
					<IconButton onClick={onClickPostBookmark}>
						<IoBookmarkOutline className="study-apply-btn-bookmark" />
					</IconButton>
					{isHost && (
						<IconButton onClick={onClickEdit}>
							<IoPencil className="study-apply-btn-bookmark" />
						</IconButton>
					)}
					<div className="study-apply-btn-wrapper">
						<CommonButton
							title={
								isHost
									? `모집 마감 (${studyData?.membersCount + 1}/${studyData?.capacity})`
									: isAppliedUser
									? '참가 완료'
									: studyData?.applied
									? '신청 수락 대기중'
									: '신청하기'
							}
							onClick={onClick}
							disabled={applyDisabled}
						/>
					</div>
				</div>
			</div>
		);
	}, [onClick, isHost, studyData?.isOpen]);

	const DeskTopCTAButtons = useCallback(() => {
		if (!studyData?.isOpen || dDay < 0) return null;

		return (
			<ButtonGroup orientation="vertical" className="desktop-cta-container">
				<Button
					className={classNames('desktop-cta-apply', { 'desktop-cta-apply-disabled': applyDisabled })}
					onClick={onClick}
					disabled={applyDisabled}
				>
					{isHost
						? `모집 마감 (${studyData?.membersCount + 1}/${studyData?.capacity})`
						: isAppliedUser || studyData?.applied
						? '이미 신청한 스터디입니다.'
						: '신청하기'}
				</Button>
				<Button className="desktop-cta-bookmark" onClick={isHost ? onClickEdit : onClickPostBookmark}>
					{isHost ? '수정하기' : '북마크 추가'}
				</Button>
			</ButtonGroup>
		);
	}, [isHost, applyDisabled, isAppliedUser, studyData?.isOpen]);

	return (
		<>
			{isLoading && studyData ? (
				<Loader />
			) : (
				<div className="studyDetailContainer">
					<div
						className="studyDetailBg"
						style={
							isDesktop
								? {}
								: {
										background: `linear-gradient(rgba(0, 40, 87, 0.6), rgba(0, 40, 87, 0.6)), url(${categoryImageMapper(
											getMainCategoryCode(Number(studyData?.categoryCode))
										)})`,
								  }
						}
					>
						<div
							className="study-desktop-header-container"
							style={
								isDesktop
									? {
											background: `linear-gradient(rgba(0, 40, 87, 0.6), rgba(0, 40, 87, 0.6)), url(${categoryImageMapperFullWidth(
												getMainCategoryCode(Number(studyData?.categoryCode))
											)})`,
									  }
									: {}
							}
						>
							<div className="study-desktop-header-wrapper">
								<StudyDetailHeader />
								{studyData && (
									<StudyInfoContainer
										categoryCode={studyData.categoryCode}
										weekdays={studyData.weekday}
										frequency={studyData.frequency}
										locations={studyData.location}
									/>
								)}
							</div>
						</div>
						<div className="study-desktop-content-container">
							<div className="study-desktop-content-wrapper">
								<DeskTopCTAButtons />
								{studyData && (
									<StudyContentContainer
										studyId={studyData.id}
										hostId={studyData.hostId}
										createdAt={studyData.createdAt}
										views={studyData.views}
										bookmarkCount={studyData.bookmarkCount}
										title={studyData.title}
										studyAbout={studyData.studyAbout}
										capacity={studyData.capacity}
										dueDate={studyData.dueDate}
										initialIndex={initialIndex}
										isHost={isHost}
									/>
								)}
							</div>
						</div>
						<CTAButtons />
					</div>
				</div>
			)}
		</>
	);
};

export default StudyDetailPage;

import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React, { useCallback, useMemo } from 'react';
import { IoBookmarkOutline, IoEllipsisVertical, IoPencil, IoShareSocialOutline } from 'react-icons/io5';
import { useParams, useLocation } from 'react-router-dom';
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
import globalState from '@src/state';

const exampleUserId = '36950d7b-9bd4-4b8e-8430-2cbe6ded3e67';

interface StudyDetailPageLocationInterface {
	initialIndex?: number;
}

const StudyDetailPage = (): JSX.Element => {
	const { studyId } = useParams<{ studyId: string }>();
	const postBookmark = usePostBookmark(studyId);
	const { data, isLoading } = useFetchStudy(studyId);
	const studyData = data;
	const location = useLocation<StudyDetailPageLocationInterface>();
	const initialIndex = location.state?.initialIndex ?? 1;

	const { openModal } = useModal();
	const { openSnackbar } = useSnackbar();
	const [state] = useAtom(globalState);

	const isHost = useMemo(() => {
		return exampleUserId === studyData?.HOST_ID;
	}, [exampleUserId, studyData]);

	const onClick = () => {
		if (!state.login) {
			openModal(ModalKeyEnum.LoginModal);
			return;
		}
		if (isHost) {
			openModal(ModalKeyEnum.StudyCloseModal);
		} else {
			openModal(ModalKeyEnum.ApplyModal);
		}
	};

	const onClickMore = () => {
		// FIXME
		// 더보기 모달에 접근하려는 사용자가 모집자인지 신청자인지를 구분하는 임시 플래그성 변수
		// API 연동 이후 수정 필요
		if (localStorage.getItem('host') === 'host') {
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
			openModal(ModalKeyEnum.LoginModal);
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

	const CTAButtons = useCallback(() => {
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
							title={isHost ? `모집 마감 (${studyData?.vacancy}/${studyData?.capacity})` : '신청하기'}
							onClick={onClick}
						/>
					</div>
				</div>
			</div>
		);
	}, [onClick]);

	const DeskTopCTAButtons = useCallback(() => {
		return (
			<ButtonGroup orientation="vertical" className="desktop-cta-container">
				<Button className="desktop-cta-apply" onClick={onClick}>
					{isHost ? `모집 마감 (${studyData?.vacancy}/${studyData?.capacity})` : '신청하기'}
				</Button>
				<Button className="desktop-cta-bookmark" onClick={onClickPostBookmark}>
					북마크하기
				</Button>
			</ButtonGroup>
		);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="studyDetailContainer">
					<div className="studyDetailBg">
						<div className="study-desktop-header-container">
							<div className="study-desktop-header-wrapper">
								<StudyDetailHeader />
								{studyData && (
									<StudyInfoContainer
										categoryCode={studyData.categoryCode}
										weekday={studyData.weekday}
										frequency={studyData.frequency}
										location={studyData.location}
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
										hostId={studyData.HOST_ID}
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

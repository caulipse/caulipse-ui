import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React, { useEffect, useRef, useState } from 'react';
import { IoArrowBack, IoBookmarkOutline, IoEllipsisVertical, IoShareSocialOutline } from 'react-icons/io5';
import { useHistory, useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles.scss';
import ApplyModalContainer from '@src/app/studyDetail/studyContent/modal/applyModal/ApplyModalContainer';
import UserStudyMoreModalContainer from '@studyDetail/studyContent/modal/userStudyMoreModal/UserStudyMoreModalContainer';
import HostStudyMoreModalContainer from '@studyDetail/studyContent/modal/hostStudyMoreModal/HostStudyMoreModalContainer';
import StudyDeleteModalContainer from '@studyDetail/studyContent/modal/studyDeleteModal/StudyDeleteModalContainer';
import ReportModalContainer from '@studyDetail/studyContent/modal/reportModal/ReportModalContainer';
import AppliedModalContainer from '@src/app/studyDetail/studyContent/modal/appliedModal/AppliedModalContainer';
import ApplyCancelModalContainer from '@src/app/studyDetail/studyContent/modal/applyCancelModal/ApplyCancelModalContainer';
import EditCategoryModalContainer from '@src/app/studyDetail/studyContent/modal/editCategoryModal/EditCategoryModalContainer';
import useFetchStudy from '@src/hooks/remotes/study/useFetchStudy';
import Loader from '@src/components/common/loader/Loader';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

const StudyDetailPage = (): JSX.Element => {
	const history = useHistory();
	const { studyId } = useParams<{ studyId: string }>();
	const { data, isLoading } = useFetchStudy(studyId);
	const studyData = data?.study;

	const [openApplyModal, setOpenApplyModal] = useState<boolean>(false);
	const [openAppliedModal, setOpenAppliedModal] = useState<boolean>(false);
	const [openUserMoreModal, setOpenUserMoreModal] = useState<boolean>(false);
	const [openHostMoreModal, setOpenHostMoreModal] = useState<boolean>(false);
	const [openStudyDeleteModal, setOpenStudyDeleteModal] = useState<boolean>(false);
	const [openReportModal, setOpenReportModal] = useState<boolean>(false);
	const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);
	const [openEditCategoryModal, setOpenEditCategoryModal] = useState<boolean>(false);

	const { openSnackbar } = useSnackbar();

	const onClick = () => {
		setOpenApplyModal(!openApplyModal);
	};

	const onClickMore = () => {
		// FIXME
		// 더보기 모달에 접근하려는 사용자가 모집자인지 신청자인지를 구분하는 임시 플래그성 변수
		// API 연동 이후 수정 필요
		if (localStorage.getItem('host') === 'host') {
			setOpenHostMoreModal(!openHostMoreModal);
		} else {
			setOpenUserMoreModal(!openUserMoreModal);
		}
	};

	const url = window.location.href;

	const onClickShare = () => {
		openSnackbar('클립보드에 복사되었습니다.');
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="studyDetailContainer">
					<div className="studyDetailBg">
						<div className="backButtonContainer">
							<button onClick={() => history.goBack()} type="button">
								<IoArrowBack size={16} color="#ffffff" />
							</button>
							<div>
								<button type="button" className="mr11">
									<IoBookmarkOutline size={16} color="#ffffff" />
								</button>
								<CopyToClipboard text={url}>
									<button type="button" className="mr11" onClick={onClickShare}>
										<IoShareSocialOutline size={16} color="#ffffff" />
									</button>
								</CopyToClipboard>
								<button type="button" onClick={onClickMore}>
									<IoEllipsisVertical size={16} color="#ffffff" />
								</button>
							</div>
						</div>
						{studyData && (
							<StudyInfoContainer
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
								bookmarks={studyData.bookmarks}
								title={studyData.title}
								studyAbout={studyData.studyAbout}
							/>
						)}
						<ApplyModalContainer
							open={openApplyModal}
							onClose={setOpenApplyModal}
							setOpenAppliedModal={setOpenAppliedModal}
						/>
						<AppliedModalContainer open={openAppliedModal} onClose={setOpenAppliedModal} />
						<ApplyCancelModalContainer open={openCancelModal} onClose={setOpenCancelModal} />
						<UserStudyMoreModalContainer
							open={openUserMoreModal}
							onClose={setOpenUserMoreModal}
							setOpenReportModal={setOpenReportModal}
							setOpenCancelModal={setOpenCancelModal}
						/>
						<HostStudyMoreModalContainer
							open={openHostMoreModal}
							onClose={setOpenHostMoreModal}
							setOpenStudyDeleteModal={setOpenStudyDeleteModal}
						/>
						<StudyDeleteModalContainer open={openStudyDeleteModal} onClose={setOpenStudyDeleteModal} />
						<ReportModalContainer open={openReportModal} onClose={setOpenReportModal} />
						<EditCategoryModalContainer open={openEditCategoryModal} onClose={setOpenEditCategoryModal} />
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

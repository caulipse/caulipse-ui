import { GetCommentResponse } from '@src/api/response/comment';
import { GetStudyResponse } from '@src/api/response/study';
import StudyContentContainer from '@src/app/studyDetail/studyContent/StudyContentContainer';
import StudyInfoContainer from '@src/app/studyDetail/studyInfo/StudyInfoContainer';
import React, { useRef, useState } from 'react';
import { IoArrowBack, IoBookmarkOutline, IoEllipsisVertical, IoShareSocialOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import { Button } from '@material-ui/core';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import ApplyPopupContainer from '@studyDetail/studyContent/apply/ApplyPopupContainer';
import UserStudyMoreModalContainer from '@studyDetail/studyContent/modal/userStudyMoreModal/UserStudyMoreModalContainer';
import HostStudyMoreModalContainer from '@studyDetail/studyContent/modal/hostStudyMoreModal/HostStudyMoreModalContainer';
import StudyDeleteModalContainer from '@studyDetail/studyContent/modal/studyDeleteModal/StudyDeleteModalContainer';

const study: GetStudyResponse = {
	id: 'asdfasdf234efawe32fd',
	createdAt: '2021-04-29',
	title: 'study title',
	studyAbout:
		' 이름자를 다하지 계절이 벌써 버리었습니다. 별빛이 지나고 멀듯이, 계십니다. 무성할 불러 별들을 멀리 거외다. 다 쉬이 이국 많은 아름다운 별 나는 불러 소녀들의 까닭입니다. 내 어머니, 나는 까닭입니다. 둘 추억과 써 오는 비둘기, 속의 위에 별이 책상을 버리었습니다. 별에도 이런 별 듯합니다. 그리고 불러 옥 프랑시스 지나고 밤을 내일 봅니다. 당신은 잔디가 그리고 별 봅니다. \n마리아 지나고 묻힌 나는 봄이 봅니다. 흙으로 위에 이웃 별에도 오는 없이 밤이 아스라히 까닭입니다. 어머님, 무엇인지 이런 멀리 헤는 계절이 잠, 가을 그리고 봅니다. 못 된 많은 까닭입니다. 프랑시스 가슴속에 못 이제 써 거외다. 보고, 별이 겨울이 동경과 헤는 이름과, 듯합니다. 어머님, 프랑시스 경, 추억과 별이 둘 다하지 까닭입니다. 아침이 하나의 가난한 별 둘 가을로 흙으로 있습니다. 이름과, 하나에 가을로 언덕 옥 있습니다. 이름과, 이름과, 사람들의 언덕 나는 새워 까닭입니다.',
	time: 90,
	weekday: 1,
	frequency: 3,
	location: 'place',
	hostId: 'host id',
	capacity: 10,
	membersCount: 4,
	vacancy: 6,
	isOpen: true,
	categoryCode: 3,
	views: 10,
	bookmarks: 2,
};

const StudyDetailPage = (): JSX.Element => {
	const history = useHistory();
	const sheetRef = useRef<BottomSheetRef>(null);
	const [applySheetVisible, setApplySheetVisible] = useState<boolean>(false);

	const [openUserMoreModal, setOpenUserMoreModal] = useState<boolean>(false);
	const [openHostMoreModal, setOpenHostMoreModal] = useState<boolean>(false);
	const [openStudyDeleteModal, setOpenStudyDeleteModal] = useState<boolean>(false);

	const onClick = () => {
		setApplySheetVisible(true);
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

	return (
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
						<button type="button" className="mr11">
							<IoShareSocialOutline size={16} color="#ffffff" />
						</button>
						<button type="button" onClick={onClickMore}>
							<IoEllipsisVertical size={16} color="#ffffff" />
						</button>
					</div>
				</div>
				<StudyInfoContainer study={study} />
				<StudyContentContainer studyData={study} />
				<ApplyPopupContainer applySheetVisible={applySheetVisible} setApplySheetVisible={setApplySheetVisible} />
				<UserStudyMoreModalContainer open={openUserMoreModal} onClose={setOpenUserMoreModal} />
				<HostStudyMoreModalContainer
					open={openHostMoreModal}
					onClose={setOpenHostMoreModal}
					setOpenStudyDeleteModal={setOpenStudyDeleteModal}
				/>
				<StudyDeleteModalContainer open={openStudyDeleteModal} onClose={setOpenStudyDeleteModal} />
				<div className="study-apply-btn-container">
					<button type="button" className="study-apply-btn-content" onClick={onClick}>
						신청하기
					</button>
				</div>
			</div>
		</div>
	);
};

export default StudyDetailPage;

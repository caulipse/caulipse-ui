import React, { useState } from 'react';
import { IoAdd, IoClose } from 'react-icons/io5';
import useModal from '@src/hooks/modal/useModal';
import ModalKeyEnum from '@common/modal/enum';
import './index.scss';
import { getSubCategoryLabel } from '@src/app/shared/utils/category';
import CommonButton from '@src/components/common/button/CommonButton';
import { ButtonTypeEnum } from '@src/components/common/button/types';
import { Container } from '@material-ui/core';
import usePatchUserProfile from '@src/hooks/remotes/user/usePatchUserProfile';

export interface UrlInterface {
	urlId: number;
	url: string;
}

interface MyProfileEditPresenterProps {
	imgSrc: string;
	nickname: string;
	major: string;
	grade: number;
	onBreak: boolean;
	categories: string[];
	shortIntro: string;
	urls: UrlInterface[];
	longIntro: string;
}

const exampleId = '00fe16f3-5b45-4f25-889c-caa6c5b8e228';

const MyProfileEditPresenter = ({
	imgSrc,
	nickname,
	major,
	grade,
	onBreak,
	categories,
	shortIntro,
	urls,
	longIntro,
}: MyProfileEditPresenterProps): JSX.Element => {
	const updateProfile = usePatchUserProfile();

	const [accUrlId, setAccUrlId] = useState<number>(urls.length);
	const [currentNickname, setCurrentNickname] = useState<string>(nickname);
	const [currentMajor, setCurrentMajor] = useState<string>(major);
	const [currentGrade, setCurrentGrade] = useState<number>(grade);
	const [currentOnBreak, setCurrentOnBreak] = useState<boolean>(onBreak);
	const [currentCategories, setCurrentCategories] = useState<string[]>(categories);
	const [currentShortIntro, setCurrentShortIntro] = useState<string>(shortIntro ?? '');
	const [currentUrls, setCurrentUrls] = useState<UrlInterface[]>(urls ?? []);
	const [currentLongIntro, setCurrentLongIntro] = useState<string>(longIntro);

	const { openModal } = useModal();

	const handleUpdateProfile = () => {
		const filteredArray = new Array(2).fill('').map((item, index) => {
			return currentUrls?.[index]?.url ?? '';
		});

		updateProfile.mutate({
			userId: exampleId,
			userName: currentNickname,
			dept: currentMajor,
			grade: String(currentGrade),
			onBreak: currentOnBreak,
			categories: currentCategories,
			shortUserAbout: currentShortIntro,
			links: filteredArray,
			userAbout: currentLongIntro,
		});
	};

	console.log('currentUrls, ', currentUrls);

	const changeProfileImg = () => {
		console.log('changeProfileImg');
	};
	const changeCategories = () => {
		openModal(ModalKeyEnum.EditCategoryModal);
	};
	const addUrl = () => {
		if (currentUrls?.length >= 3) return;
		setCurrentUrls([
			...currentUrls,
			{
				urlId: accUrlId,
				url: '',
			},
		]);
		setAccUrlId(accUrlId + 1);
	};
	const deleteUrl = (paramId: number) => {
		if (currentUrls?.length === 0) return;
		const resultUrls = [...currentUrls].filter((item) => item.urlId !== paramId);
		setCurrentUrls(resultUrls);
	};

	const renderUrls = (item: UrlInterface) => {
		if (item?.url === null) return null;
		return (
			<div className="profile-edit-url-container" key={item.urlId}>
				<input
					className="profile-edit-url-input"
					placeholder="자신을 잘 나타낼수록 스터디 구하기가 쉬워져요!"
					value={item.url}
					onChange={(e) => {
						const text = e.target.value;
						const result = [...currentUrls].map((selectedItem) => {
							if (item.urlId === selectedItem.urlId) {
								return {
									urlId: item.urlId,
									url: text,
								};
							}
							return selectedItem;
						});
						setCurrentUrls(result);
					}}
				/>
				<button type="button" onClick={() => deleteUrl(item.urlId)}>
					<IoClose size={24} color="#929699" />
				</button>
			</div>
		);
	};

	return (
		<div className="profile-edit-container">
			<button type="button" onClick={changeProfileImg}>
				<img className="profile-edit-image" src={imgSrc} alt="profile" />
			</button>
			<div className="profile-edit-nickname-title">닉네임</div>
			<input
				className="profile-edit-nickname-input"
				type="text"
				placeholder="닉네임을 입력해 주세요."
				value={currentNickname}
				onChange={(e) => setCurrentNickname(e.target.value)}
			/>
			<div className="profile-edit-row-container mt8">
				<div className="profile-edit-column-container flex-grow-1">
					<div className="profile-edit-major-title">학과</div>
					<input
						className="profile-edit-major-input"
						type="text"
						placeholder="ex. 컴퓨터공학"
						value={currentMajor}
						onChange={(e) => setCurrentMajor(e.target.value)}
					/>
				</div>
				<div className="profile-edit-column-container ml16">
					<div className="profile-edit-major-title">
						학년<span className="profile-edit-grade-subtitle">(선택)</span>
					</div>
					<select
						className="profile-edit-grade-select"
						value={currentGrade}
						onChange={(e) => setCurrentGrade(Number(e.target.value))}
					>
						<option value={1}>1학년</option>
						<option value={2}>2학년</option>
						<option value={3}>3학년</option>
						<option value={4}>4학년</option>
					</select>
				</div>
			</div>
			<div className="profile-edit-status-title">재학상태</div>
			<select
				className="profile-edit-status-select"
				value={Number(currentOnBreak)}
				onChange={(e) => setCurrentOnBreak(Boolean(e.target.value))}
			>
				<option value={0}>재학중</option>
				<option value={1}>휴학중</option>
			</select>
			<div className="divider mt40" />
			<div className="profile-edit-category-title">관심 카테고리</div>
			<div className="profile-edit-category-text-container">
				<div className="profile-edit-category-text">
					{currentCategories?.map(
						(item, index, { length }) => `${getSubCategoryLabel(Number(item))}${index === length - 1 ? '' : ', '}`
					)}
				</div>
				<button type="button" className="profile-edit-category-edit" onClick={changeCategories}>
					<div>수정하기</div>
				</button>
			</div>
			<div className="profile-edit-short-intro-title">
				한줄소개<span className="profile-edit-short-intro-subtitle">{currentShortIntro?.length}/60</span>
			</div>
			<textarea
				className="profile-edit-short-intro-input"
				placeholder="프로필 상단에 보이는 소개글입니다."
				maxLength={60}
				onChange={(e) => setCurrentShortIntro(e.target.value)}
				value={currentShortIntro}
			/>
			<div className="profile-edit-short-intro-title">
				URL 추가
				<span className="profile-edit-short-intro-subtitle">포트폴리오 사이트나 작업용 sns를 추가해보세요!</span>
			</div>
			{currentUrls.map(renderUrls)}
			<button type="button" onClick={addUrl}>
				<IoAdd className="profile-edit-url-add-icon" size={24} color="#929699" />
			</button>
			<div className="divider mt24" />
			<div className="profile-edit-short-intro-title mt40">
				자기소개글
				<span className="profile-edit-short-intro-subtitle">(선택)</span>
			</div>
			<textarea
				className="profile-edit-long-intro-textarea"
				placeholder="프로필 문구가 너무 짧으신가요? 자기소개글을 완성시켜주세요!"
				value={currentLongIntro}
				onChange={(e) => setCurrentLongIntro(e.target.value)}
			/>
			<Container className="profile-edit-edit-button">
				<CommonButton type={ButtonTypeEnum.primary} title="수정완료" onClick={handleUpdateProfile} />
			</Container>
		</div>
	);
};

export default MyProfileEditPresenter;

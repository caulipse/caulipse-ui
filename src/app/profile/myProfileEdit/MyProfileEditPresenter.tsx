import React, { useState } from 'react';
import './index.scss';
import { IoAdd, IoClose } from 'react-icons/io5';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const sampleCategories = [
	'항목 텍스트 1',
	'항목 텍스트 2',
	'항목 테스트 3',
	'항목 테스트 4',
	'항목 테스트 5',
	'항목 테스트 6',
];

interface UrlInterface {
	urlId: number;
	url: string;
}

const MyProfileEditPresenter = (): JSX.Element => {
	const [shortIntro, setShortIntro] = useState<string>('');
	const [urls, setUrls] = useState<UrlInterface[]>([]);
	const [accUrlId, setAccUrlId] = useState<number>(0);

	const changeProfileImg = () => {
		console.log('changeProfileImg');
	};
	const changeCategories = () => {
		console.log('changeCategories');
	};
	const addUrl = () => {
		if (urls?.length >= 3) return;
		setUrls([
			...urls,
			{
				urlId: accUrlId,
				url: '',
			},
		]);
		setAccUrlId(accUrlId + 1);
	};
	const deleteUrl = (paramId: number) => {
		if (urls?.length === 0) return;
		const resultUrls = [...urls].filter((item) => item.urlId !== paramId);
		setUrls(resultUrls);
	};

	const renderUrls = (item: UrlInterface) => (
		<div className="profile-edit-url-container" key={item.urlId}>
			<input
				className="profile-edit-url-input"
				placeholder="자신을 잘 나타낼수록 스터디 구하기가 쉬워져요!"
				value={item.url}
				onChange={(e) => {
					const text = e.target.value;
					const result = [...urls].map((selectedItem) => {
						if (item.urlId === selectedItem.urlId) {
							return {
								urlId: item.urlId,
								url: text,
							};
						}
						return selectedItem;
					});
					setUrls(result);
				}}
			/>
			<button type="button" onClick={() => deleteUrl(item.urlId)}>
				<IoClose size={24} color="#929699" />
			</button>
		</div>
	);

	return (
		<div className="profile-edit-container">
			<button type="button" onClick={changeProfileImg}>
				<img className="profile-edit-image" width="208px" height="208px" src={sampleImgUrl} alt="profile" />
			</button>
			<div className="profile-edit-nickname-title">닉네임</div>
			<input className="profile-edit-nickname-input" type="text" placeholder="닉네임을 입력해 주세요." />
			<div className="profile-edit-row-container mt8">
				<div className="profile-edit-column-container flex-grow-1">
					<div className="profile-edit-major-title">학과</div>
					<input className="profile-edit-major-input" type="text" placeholder="ex. 컴퓨터공학" />
				</div>
				<div className="profile-edit-column-container ml16">
					<div className="profile-edit-major-title">
						닉네임<span className="profile-edit-grade-subtitle">(선택)</span>
					</div>
					<select className="profile-edit-grade-select">
						<option>1학년</option>
						<option>2학년</option>
						<option>3학년</option>
						<option>4학년</option>
					</select>
				</div>
			</div>
			<div className="profile-edit-status-title">재학상태</div>
			<select className="profile-edit-status-select">
				<option>재학중</option>
				<option>휴학중</option>
			</select>
			<div className="divider mt40" />
			<div className="profile-edit-category-title">관심 카테고리</div>
			<div className="profile-edit-category-text-container">
				<div className="profile-edit-category-text">
					{sampleCategories?.map((item, index, { length }) => `${item}${index === length - 1 ? '' : ', '}`)}
				</div>
				<button type="button" className="profile-edit-category-edit" onClick={changeCategories}>
					<div>수정하기</div>
				</button>
			</div>
			<div className="profile-edit-short-intro-title">
				한줄소개<span className="profile-edit-short-intro-subtitle">{shortIntro?.length}/60</span>
			</div>
			<input
				className="profile-edit-short-intro-input"
				placeholder="프로필 상단에 보이는 소개글입니다."
				maxLength={60}
				onChange={(e) => setShortIntro(e.target.value)}
				value={shortIntro}
			/>
			<div className="profile-edit-short-intro-title">
				URL 추가
				<span className="profile-edit-short-intro-subtitle">포트폴리오 사이트나 작업용 sns를 추가해보세요!</span>
			</div>
			{urls.map(renderUrls)}
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
			/>
		</div>
	);
};

export default MyProfileEditPresenter;

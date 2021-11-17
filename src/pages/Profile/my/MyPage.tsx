import React, { useEffect, useState } from 'react';
import './MyPage.scss';

import * as Factory from 'factory.ts';

interface CategoryInterface {
	id: number;
	category: string;
}

function MyPage() {
	// 카테고리 목록
	const [categories, setCategories] = useState<CategoryInterface[]>([]);
	const [urls, setUrls] = useState<string[]>([]);

	const addUrl = () => {
		setUrls([...urls, '']);
	};

	const getCategoriesData = (iter: number) => {
		const categoryFactory = Factory.Sync.makeFactory<CategoryInterface>({
			id: Factory.each((i) => i),
			category: '카테고리',
		});
		return categoryFactory.buildList(iter);
	};

	useEffect(() => {
		setCategories(getCategoriesData(20));
	}, []);

	const ProfileImage = () => {
		return <div className="profileImage" />;
	};

	const NicknameInput = () => {
		return (
			<div>
				<div style={{ marginBottom: '10px' }} className="rowContainer">
					<div className="titleText">닉네임</div>
				</div>
				<div
					style={{
						display: 'flex',
						width: '100%',
					}}
				>
					<input className="nicknameInput" type="text" placeholder="닉네임을 입력해주세요." />
				</div>
			</div>
		);
	};

	const MajorInput = () => {
		return (
			<div>
				<div className={['rowContainer', 'flex1'].join(' ')}>
					<div className={['columnContainer', 'flex1'].join(' ')}>
						<div className={['nicknameText', 'majorContainer'].join(' ')}>학과</div>
						<div className="majorInputContainer">
							<input type="text" className="nicknameInput" />
						</div>
					</div>
					<div className="columnContainer">
						<div className={['nicknameText', 'majorContainer'].join(' ')}>
							학년 <span className="subTitleText">(선택)</span>
						</div>
						<div className="gradeSelectionContainer">
							<select name="grade" className="gradeSelection">
								<option value={1}>1학년</option>
								<option value={2}>2학년</option>
								<option value={3}>3학년</option>
								<option value={4}>4학년</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const Introduction = ({ isShort }: { isShort: boolean }) => {
		return (
			<div className="introductionContainer">
				<div className="rowContainer">
					{isShort ? (
						<div className="titleText">한줄 소개</div>
					) : (
						<div className="titleText">
							자기소개 글 <span className="subTitleText">(선택)</span>
						</div>
					)}
				</div>
				{isShort ? (
					<input type="text" className="introductionInputText" placeholder="프로필 상단에 보이는 소개글입니다." />
				) : (
					<textarea placeholder="나만의 소개글을 완성해주세요!" className="introductionTextArea" />
				)}
			</div>
		);
	};

	const Categories = () => {
		return (
			<div className="categoryContainer">
				<div className="titleText">관심 카테고리</div>
				<div className="categoryListContainer">
					{categories.map((item) => {
						return (
							<div key={item.id} className="categoryItemContainer">
								<div className="categoryText">{item.category}</div>
								<button className="categoryText" type="button">
									x
								</button>
							</div>
						);
					})}
					<button className="addItemContainer" type="button">
						<div className="addText">추가하기</div>
						<button className="addText" type="button">
							+
						</button>
					</button>
				</div>
			</div>
		);
	};

	const SaveButton = () => {
		return (
			<button type="button" className="saveButton">
				<div className="saveButtonText">내 프로필 저장</div>
			</button>
		);
	};

	const Urls = () => {
		return (
			<div className="urlContainer">
				<div className="urlTitle">
					URL 추가<span className="urlSubtitle">포트폴리오 사이트나 작업용 sns를 추가해보세요</span>
				</div>
				{urls.map((urlItem, urlIndex) => {
					return (
						<div key={`${urlItem}`} className="urlItemContainer">
							<input
								type="text"
								className="urlItemInput"
								placeholder="자신을 잘 나타낼 수록 스터디 구하기가 쉬워져요!"
							/>
							<button type="button" className="urlRemoveButton">
								x
							</button>
						</div>
					);
				})}
				<button type="button" className="urlAddButton" onClick={addUrl}>
					+
				</button>
			</div>
		);
	};

	return (
		<div className="backgroundColorContainer">
			<div className="container">
			<div className="title">내 프로필</div>
				<div className="imageNameContainer">
					<ProfileImage />
					<div className={['flex1', 'columnContainer', 'marginContainer'].join(' ')}>
						<NicknameInput />
						<MajorInput />
					</div>
				</div>
				<Introduction isShort />
				<Categories />
				<Urls />
				<div className='mb58'>
					<Introduction isShort={false} />
				</div>
				<SaveButton />
			</div>
		</div>
	);
}

export default MyPage;

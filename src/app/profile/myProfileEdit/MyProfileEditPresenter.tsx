import React from 'react';
import './index.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

const MyProfileEditPresenter = (): JSX.Element => {
	const changeProfileImg = () => {
		console.log('changeProfileImg');
	};

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
					<input className="profile-edit-major-input" type="text" placeholder="닉네임을 입력해 주세요." />
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
		</div>
	);
};

export default MyProfileEditPresenter;

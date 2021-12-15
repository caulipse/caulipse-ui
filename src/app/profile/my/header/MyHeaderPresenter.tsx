import React from 'react';
import { IoClose, IoSettingsSharp, IoChevronForwardOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import './index.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

interface MyHeaderPresenterProps {
	userName: string;
}

const MyHeaderPresenter = ({ userName }: MyHeaderPresenterProps): JSX.Element => {

    const history=useHistory();
    
	return (
		<div className="container">
			<div className="iconsContainer">
				<button type="button" onClick={()=>history.goBack()}>
					<IoClose size={24} fill="#f7f7f7" />
				</button>
				<button type="button">
					<IoSettingsSharp size={24} fill="#f7f7f7" />
				</button>
			</div>
			<img className="profilePhoto" src={sampleImgUrl} alt="사용자 프로필 사진" />
			<div className="userName">
				{userName}
				<span className="userNameSuffix"> 님</span>
			</div>
            <span className='myProfileBtnText'>내 프로필 보기 {'>'}</span>

		</div>
	);
};

export default MyHeaderPresenter;

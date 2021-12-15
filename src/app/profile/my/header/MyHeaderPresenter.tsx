import React from 'react';
import { IoClose, IoSettingsSharp, IoChevronForwardOutline } from 'react-icons/io5';
import './index.scss';

const sampleImgUrl='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

interface MyHeaderPresenterProps {
	userName: string;
}

const MyHeaderPresenter = ({ userName }: MyHeaderPresenterProps): JSX.Element => {
	return (
		<div className="container">
			<div className="iconsContainer">
				<button type="button">
					<IoClose size={24} fill="#f7f7f7" />
				</button>
				<button type="button">
					<IoSettingsSharp size={24} fill="#f7f7f7" />
				</button>
			</div>
            <div className='profilePhotoContainer'>
                <img className='profilePhoto' src={sampleImgUrl} alt='사용자 프로필 사진'/>

            </div>
			{userName}
		</div>
	);
};

export default MyHeaderPresenter;

import React from 'react';
import { IoClose, IoSettingsSharp, IoChevronForwardOutline } from 'react-icons/io5';
import './index.scss';

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
			{userName}
		</div>
	);
};

export default MyHeaderPresenter;

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();
	const location = useLocation();

	return (
		<header className='headerContainer'>
			{headerButtons.map((button: HeaderButtonProps) => (
				<button
					className={location.pathname === button.route ? 'tagSelected' : 'tagUnselected'}
					key={button.title}
					type="button"
					onClick={() => history.push(button.route)}
				>
					<div>{button.title}</div>
				</button>
			))}
		</header>
	);
};

export default Header;

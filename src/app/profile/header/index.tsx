import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();
	const location = useLocation();

	return (
		<header className="my-studies-header-container">
			{headerButtons.map((button: HeaderButtonProps) => (
				<button
					className={`my-studies-header-tag-${location.pathname === button.route ? 'selected' : 'unselected'}`}
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

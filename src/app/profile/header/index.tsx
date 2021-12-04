import React from 'react';
import reactRouter, { useHistory } from 'react-router';
import { HeaderButtonProps, headerButtons } from './headerList';

const Header: React.FC = () => {
	const history = useHistory();

	return (
		<header>
			{headerButtons.map((button: HeaderButtonProps) => (
				<button key={button.title} type="button" onClick={() => history.push(button.route)}>
					<div>{button.title}</div>
				</button>
			))}
		</header>
	);
};

export default Header;

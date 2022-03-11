import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();

	const openDrawer = () => {
		console.log('openDrawer');
	};

	return (
		<header className="header-con">
			<Button onClick={openDrawer}>
				<IoMenu className="header-menu" />
			</Button>
			<Typography>서비스 로고</Typography>
			<Button onClick={() => history.push('/login')}>
				<Typography className="header-login">로그인</Typography>
			</Button>
			{/* <div className="header-user-bt">
				{headerButtons.map((button: HeaderButtonProps) => (
					<button key={button.title} type="button" onClick={() => history.push(button.route)}>
						<div>{button.title}</div>
					</button>
				))}
			</div> */}
		</header>
	);
};

export default Header;

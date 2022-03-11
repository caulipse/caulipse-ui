import { Button, Container, Typography } from '@material-ui/core';
import globalState from '@src/state';
import { useAtom } from 'jotai';
import React from 'react';
import { IoMenu, IoNotifications, IoSearch } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();

	const [state] = useAtom(globalState);

	const openDrawer = () => {
		console.log('openDrawer');
	};

	const clickSearchIcon = () => {
		console.log('clickSearchIcon');
	};

	const clickNotification = () => {
		console.log('clickNotification');
	};

	return (
		<header className="header-con">
			<IoMenu className="header-icon" type="button" onClick={openDrawer} />
			<Typography>서비스 로고</Typography>
			{state.login ? (
				<div>
					<IoSearch className="header-icon" type="button" onClick={clickSearchIcon} />
					<IoNotifications className="header-icon" type="button" onClick={clickNotification} />
				</div>
			) : (
				<Button onClick={() => history.push('/login')}>
					<Typography className="header-login">로그인</Typography>
				</Button>
			)}
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

import { Button, Container, SwipeableDrawer, Typography } from '@material-ui/core';
import globalState from '@src/state';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { IoMenu, IoNotifications, IoSearch } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();

	const [state] = useAtom(globalState);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const openDrawer = () => {
		setIsDrawerOpen(true);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
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
			<SwipeableDrawer
				anchor="left"
				open={isDrawerOpen}
				onOpen={openDrawer}
				onClose={closeDrawer}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
			>
				<Typography>마이 페이지</Typography>
			</SwipeableDrawer>
		</header>
	);
};

export default Header;

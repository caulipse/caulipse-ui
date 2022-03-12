import { Box, Button, Divider, List, ListItem, ListItemText, SwipeableDrawer, Typography } from '@material-ui/core';
import globalState from '@src/state';
import { useAtom } from 'jotai';
import React, { useCallback, useState } from 'react';
import { IoMenu, IoNotifications, IoSearch } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { drawerList } from './drawerList';
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

	const renderDrawerList = useCallback(() => {
		return drawerList.map((drawerSubList, drawerSubListIdx) => {
			return [
				...drawerSubList.map((drawerItem) => (
					<ListItem key={drawerItem.title} disableGutters component="a" href={drawerItem.route}>
						<ListItemText primary={drawerItem.title} />
					</ListItem>
				)),
				// eslint-disable-next-line react/no-array-index-key
				<ListItem key={`divider-${drawerSubListIdx}`}>
					<Divider />
				</ListItem>,
			];
		});
	}, []);

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
				<div className="drawer-container">
					<div>이미지 들어갈 영역</div>
					<Box className="drawer-title">마이 페이지</Box>
					<nav>
						<List>{renderDrawerList()}</List>
					</nav>
				</div>
			</SwipeableDrawer>
		</header>
	);
};

export default Header;

import { Box, Button, List, ListItem, ListItemText, SwipeableDrawer, Typography } from '@material-ui/core';
import usePatchLogout from '@src/hooks/remotes/user/usePatchLogout';
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

	const logout = usePatchLogout();

	const handleLogout = () => {
		logout.mutate();
	};

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
		return drawerList.map((drawerSubList, drawerSubListIdx, { length: drawerSubListLength }) => {
			return drawerSubList.map((drawerItem, drawerItemIdx, { length: drawerItemLength }) => (
				<ListItem
					button
					key={drawerItem.title}
					disableGutters
					component="a"
					href={drawerItem.route}
					divider={drawerItemIdx === drawerItemLength - 1 && drawerSubListIdx !== drawerSubListLength - 1}
				>
					<ListItemText primary={drawerItem.title} className="drawer-item-button" />
				</ListItem>
			));
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
					<List disablePadding component="nav">
						{renderDrawerList()}
					</List>
				</div>
				{state.login && (
					<Button fullWidth onClick={handleLogout}>
						<Box className="drawer-logout-text">로그아웃</Box>
					</Button>
				)}
			</SwipeableDrawer>
		</header>
	);
};

export default Header;

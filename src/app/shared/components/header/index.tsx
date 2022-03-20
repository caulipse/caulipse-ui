import { Box, Button, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Typography } from '@material-ui/core';
import usePatchLogout from '@src/hooks/remotes/user/usePatchLogout';
import globalState from '@src/state';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import React, { useCallback, useState } from 'react';
import { IoMegaphone, IoMenu, IoNotifications, IoSearch } from 'react-icons/io5';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { drawerList, drawerListBeforeLogin } from './drawerList';
import './index.scss';

const Header: React.FC = () => {
	const history = useHistory();
	const locationPathName = useLocation().pathname;
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

	const clickNotices = () => {
		history.push('/profile/notice');
	};

	const clickSearchIcon = () => {
		console.log('clickSearchIcon');
	};

	const clickNotification = () => {
		console.log('clickNotification');
	};

	// TODO: 검색결과 리스트 페이지 url 나오면 조건에 추가
	const HeaderRightComponent = () => {
		if (state.login) {
			if (locationPathName.startsWith('/study') && !locationPathName.startsWith('/study/detail')) {
				return (
					<div>
						<IconButton onClick={clickNotices}>
							<IoMegaphone className="header-icon desktop-visible" />
						</IconButton>
						<IconButton onClick={clickSearchIcon}>
							<IoSearch className="header-icon" />
						</IconButton>
						<IconButton onClick={clickNotification}>
							<IoNotifications className="header-icon" />
						</IconButton>
						<IconButton onClick={openDrawer}>
							<IoMenu className="header-icon desktop-visible" />
						</IconButton>
					</div>
				);
			}

			return <IoNotifications className="header-icon" type="button" onClick={clickNotification} />;
		}

		if (locationPathName.startsWith('/study/detail')) {
			return <div />;
		}
		if (locationPathName.startsWith('/study')) {
			return <IoSearch className="header-icon" type="button" onClick={clickSearchIcon} />;
		}

		return (
			<Button onClick={() => history.push('/login')}>
				<Typography className="header-login">로그인</Typography>
			</Button>
		);
	};

	const renderDrawerList = useCallback(() => {
		const list = state.login ? drawerList : drawerListBeforeLogin;

		return list.map((drawerSubList, drawerSubListIdx, { length: drawerSubListLength }) => {
			return drawerSubList.map((drawerItem, drawerItemIdx, { length: drawerItemLength }) => (
				<ListItem
					button
					key={drawerItem.title}
					disableGutters
					component="a"
					href={drawerItem.route}
					divider={drawerItemIdx === drawerItemLength - 1 && drawerSubListIdx !== drawerSubListLength - 1}
				>
					<ListItemText
						className={classNames('drawer-item-button', { 'font-bold': drawerItem?.isBold })}
						disableTypography
					>
						{drawerItem.title}
					</ListItemText>
				</ListItem>
			));
		});
	}, [drawerList, drawerListBeforeLogin, state.login]);

	return (
		<header className="header-con">
			<IconButton onClick={openDrawer}>
				<IoMenu className="header-icon mobile-visible" />
			</IconButton>
			<Link to="/">
				<Typography className="header-logo">서비스 로고</Typography>
			</Link>
			<HeaderRightComponent />
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

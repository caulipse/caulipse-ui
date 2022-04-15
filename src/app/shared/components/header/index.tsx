import { Box, Button, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Typography } from '@material-ui/core';
import ModalKeyEnum from '@src/components/common/modal/enum';
import useModal from '@src/hooks/modal/useModal';
import usePatchLogout from '@src/hooks/remotes/user/usePatchLogout';
import globalState from '@src/state';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import React, { useCallback, useMemo, useState } from 'react';
import {
	IoBookmark,
	IoBookmarkOutline,
	IoMegaphone,
	IoMenu,
	IoNotifications,
	IoNotificationsOutline,
	IoSearch,
} from 'react-icons/io5';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { drawerList, drawerListBeforeLogin } from './drawerList';
import './index.scss';

const exampleId = 'sample-id';

const Header: React.FC = () => {
	const history = useHistory();
	const locationPathName = useLocation().pathname;
	const { openModal } = useModal();
	const [state] = useAtom(globalState);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const logout = usePatchLogout();

	const isGnbWhite = useMemo(() => {
		return locationPathName === `/profile/${exampleId}`;
	}, [locationPathName]);

	const iconColor = useMemo(() => {
		return isGnbWhite ? '#101010' : '#ffffff';
	}, [isGnbWhite]);

	const handleLogout = () => {
		logout.mutate();
	};

	const openDrawer = () => {
		setIsDrawerOpen(true);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
	};

	const clickBookmark = () => {
		history.push('/profile/studies/bookmark');
	};

	const clickSearchIcon = () => {
		openModal(ModalKeyEnum.StudySearchModal, {
			onSearch: (searchKeyword: string) => {
				history.push({ pathname: '/study/search', state: { searchKeyword } });
			},
		});
	};

	const clickNotification = () => {
		openModal(ModalKeyEnum.NotificationModal);
	};

	// TODO: 검색결과 리스트 페이지 url 나오면 조건에 추가
	const HeaderRightComponent = () => {
		if (state.login) {
			return (
				<div className="header-icons-con">
					<IoSearch onClick={clickSearchIcon} className="header-icon" color={iconColor} />
					<IoNotificationsOutline onClick={clickNotification} className="header-icon mr0-mobile" color={iconColor} />
					<IoBookmarkOutline onClick={clickBookmark} className="header-icon desktop-visible" color={iconColor} />
					<IoMenu onClick={openDrawer} className="header-icon desktop-visible" color={iconColor} />
				</div>
			);
		}

		return (
			<div className="header-icons-con">
				<IoSearch onClick={clickSearchIcon} className="header-icon desktop-visible" color={iconColor} />
				<Button onClick={() => openModal(ModalKeyEnum.LoginModal, { history })}>
					<Typography className="header-login">로그인</Typography>
				</Button>
			</div>
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
					component={drawerItem?.isLogin ? 'button' : 'a'}
					href={drawerItem?.route}
					onClick={() => {
						if (drawerItem?.isLogin) {
							setIsDrawerOpen(false);
							openModal(ModalKeyEnum.LoginModal, { history });
						}
					}}
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
		<header className={classNames('header-con', { 'header-bg-white': isGnbWhite })}>
			<IoMenu onClick={openDrawer} className="header-icon mobile-visible" color={iconColor} />
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

import config from '@src/config';

export interface DrawerButtonProps {
	title: string;
	route?: string;
	isBold?: boolean;
	isLogin?: boolean;
}
export const drawerList: DrawerButtonProps[][] = [
	[
		{
			title: '마이 페이지',
			route: '/profile',
			isBold: true,
		},
		{
			title: '내 프로필',
			route: '/profile/edit',
		},
	],
	[
		{
			title: '북마크',
			route: '/profile/studies/bookmark',
		},
		{
			title: '신청한 스터디',
			route: '/profile/studies/appliedStudies',
		},
		{
			title: '모집하는 스터디',
			route: '/profile/studies/recruitingStudies',
		},
	],
	[
		{
			title: '공지사항',
			route: '/profile/notice',
		},
		{
			title: '문의하기',
			route: `mailto:${config.mail}`,
		},
	],
];
export const drawerListBeforeLogin: DrawerButtonProps[][] = [
	[
		{
			title: '로그인 / 회원가입',
			isBold: true,
			isLogin: true,
		},
	],
	[
		{
			title: '공지사항',
			route: '/profile/notice',
		},
		{
			title: '문의하기',
			route: `mailto:${config.mail}`,
		},
	],
];

const SAMPLE_ID = 'sample-id';
export interface DrawerButtonProps {
	title: string;
	route?: string;
	onClick?: () => void;
}
export const drawerList: DrawerButtonProps[][] = [
	[
		{
			title: '내 프로필',
			route: `/profile/${SAMPLE_ID}`,
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
			route: 'profile/notice',
		},
		{
			title: '문의하기',
			onClick: () => {
				console.log('문의하기');
			},
		},
	],
];

export interface HeaderButtonProps {
	title: string;
	route: string;
}

export const headerButtons: HeaderButtonProps[] = [
	{
		title: '북마크',
		route: '/profile/studies/bookmark',
	},
	{
		title: '신청 스터디',
		route: '/profile/studies/appliedStudies',
	},
	{
		title: '모집 스터디',
		route: '/profile/studies/recruitingStudies',
	},
];

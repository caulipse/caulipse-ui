export interface HeaderButtonProps {
	title: string;
	route: string;
}

export const headerButtons: HeaderButtonProps[] = [
	{
		title: '북마크',
		route: '/bookmark',
	},
	{
		title: '신청 스터디',
		route: '/appliedStudies',
	},
	{
		title: '모집 스터디',
		route: '/recruitingStudies',
	},
];

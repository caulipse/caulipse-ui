const SAMPLE_ID = 'sample-id';
export interface HeaderButtonProps {
	title: string;
	route: string;
}
export const headerButtons: HeaderButtonProps[] = [
	{
		title: 'profile',
		route: `/profile/${SAMPLE_ID}`,
	},
	{
		title: 'login',
		route: '/login',
	},
];

export enum IconAlignEnum {
	left = 'left',
	right = 'right',
}

export interface IIconButtonProps {
	onClick: () => void;
	align?: IconAlignEnum;
}

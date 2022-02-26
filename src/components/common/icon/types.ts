export enum IconAlignEnum {
	left = 'left',
	right = 'right',
}

export interface IIconProps {
	onClick: () => void;
	align?: IconAlignEnum;
}

export enum ButtonTypeEnum {
	primary = 'primary',
	secondary = 'secondary',
	tertiary = 'tertiary',
}

export interface IButtonProps {
	title: string;
	onClick: (e?: any) => void;
	disabled?: boolean;
	style?: React.CSSProperties;
	type?: ButtonTypeEnum;
	className?: string;
}

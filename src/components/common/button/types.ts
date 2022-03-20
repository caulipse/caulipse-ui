export enum ButtonTypeEnum {
	primary = 'primary',
	secondary = 'secondary',
}

export interface IButtonProps {
	title: string;
	onClick: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
	type?: ButtonTypeEnum;
	className?: string;
}

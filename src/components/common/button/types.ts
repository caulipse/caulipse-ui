export enum ButtonTypeEnum {
	primary = 'primary',
	secondary = 'secondary',
}

export interface IButtonProps {
	title: string;
	onClick: (e?: any) => void;
	disabled?: boolean;
	style?: React.CSSProperties;
	type?: ButtonTypeEnum;
}

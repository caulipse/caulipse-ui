export interface IButtonProps {
	title: string;
	onClick: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
}

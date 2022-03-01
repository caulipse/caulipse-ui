export enum SnackbarTypeEnum {
	primary = 'primary',
	secondary = 'secondary',
}

export interface ISnackbarProps {
	open: boolean;
	message: string;
	type?: SnackbarTypeEnum;
}

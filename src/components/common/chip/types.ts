export enum ChipTypeEnum {
	primary = 'primary',
	secondary = 'secondary',
}

export interface IChipProps {
	selected?: boolean;
	label: string;
	onClick: (params: string) => void;
	type?: ChipTypeEnum;
}

import ModalKeyEnum from './enum';

export interface IModalProps {
	open: boolean;
	onClose: (param: boolean) => void;
	children: JSX.Element;
	height?: string;
	isFullHeight?: boolean;
	HeaderComponent?: React.ReactNode;
	FooterComponent?: React.ReactNode;
}

export interface ISimpleModalProps extends IModalProps {
	footer?: boolean;
	title?: string;
	titleStyle?: React.CSSProperties;
}
export interface IModalContainerCommonProps {
	open: boolean;
	onClose: (param: boolean) => void;
}

export interface IGlobalModalProps {
	open: boolean;
	key?: ModalKeyEnum | '';
	params?: any;
}

import React, { useMemo } from 'react';
import './index.scss';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Container, Dialog } from '@material-ui/core';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import { IModalProps } from './types';

export interface IContentProps {
	children: JSX.Element;
	height?: string;
	isDesktop: boolean;
}

const Content = ({ children, height, isDesktop }: IContentProps) => {
	return (
		<Container
			className="modal-container"
			style={{ minWidth: isDesktop ? '20rem' : '100%', height: isDesktop ? 'auto' : height }}
		>
			{children}
		</Container>
	);
};

const Modal = ({ open, onClose, children, height }: IModalProps): JSX.Element => {
	const { width } = useWindowDimensions();

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	return isDesktop ? (
		<Dialog open={open}>
			<Content height={height} isDesktop={isDesktop}>
				{children}
			</Content>
		</Dialog>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)} className="modal-bottom-sheet">
			<Content height={height} isDesktop={isDesktop}>
				{children}
			</Content>
		</BottomSheet>
	);
};

export default Modal;

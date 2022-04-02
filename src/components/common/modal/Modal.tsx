import React, { useMemo } from 'react';
import './index.scss';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Container, Dialog } from '@material-ui/core';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import classNames from 'classnames';
import { IModalProps } from './types';

export interface IContentProps {
	children: JSX.Element;
	height?: string;
	isDesktop: boolean;
	isFullHeight?: boolean;
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

const Modal = ({ open, onClose, children, height, isFullHeight = false }: IModalProps): JSX.Element => {
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
		<BottomSheet
			open={open}
			onDismiss={() => onClose(false)}
			className={classNames('modal-bottom-sheet', { 'simple-modal-full-width': isFullHeight })}
		>
			<Content height={isFullHeight ? '100vh' : height} isDesktop={isDesktop}>
				{children}
			</Content>
		</BottomSheet>
	);
};

export default Modal;

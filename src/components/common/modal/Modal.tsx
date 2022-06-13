import React, { useMemo } from 'react';
import './index.scss';
import { Box, Container, Dialog } from '@material-ui/core';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import classNames from 'classnames';
import { IModalProps } from './types';
import BottomSheet from '../bottomsheet';

export interface IContentProps {
	children: JSX.Element;
	height?: string;
	isDesktop: boolean;
	isFullHeight?: boolean;
	HeaderComponent?: React.ReactNode;
	FooterComponent?: React.ReactNode;
}

const Content = ({ children, height, isDesktop, HeaderComponent, FooterComponent }: IContentProps) => {
	return (
		<Container
			className="modal-container"
			style={{
				minWidth: isDesktop ? '20rem' : '100%',
				height: isDesktop ? 'auto' : height,
				overflowY: 'auto',
			}}
		>
			<Box className="modal-content-header">{HeaderComponent}</Box>
			{children}
			<Box style={{ marginBottom: FooterComponent ? '10rem' : 0 }} />
			<Box className="modal-content-footer">{FooterComponent}</Box>
		</Container>
	);
};

const Modal = ({
	open,
	onClose,
	children,
	height,
	isFullHeight = false,
	HeaderComponent,
	FooterComponent,
}: IModalProps): JSX.Element => {
	const { width } = useWindowDimensions();

	const isDesktop = useMemo(() => {
		return width > 1024;
	}, [width]);

	return isDesktop ? (
		<Dialog open={open}>
			<Content
				height={height}
				isDesktop={isDesktop}
				HeaderComponent={HeaderComponent}
				FooterComponent={FooterComponent}
			>
				{children}
			</Content>
		</Dialog>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)}>
			<Content
				height={isFullHeight ? '100vh' : height}
				isDesktop={isDesktop}
				HeaderComponent={HeaderComponent}
				FooterComponent={FooterComponent}
			>
				{children}
			</Content>
		</BottomSheet>
	);
};

export default Modal;

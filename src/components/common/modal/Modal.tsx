import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
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
	const childrenRef = useRef<HTMLDivElement | null>(null);
	const { height: windowHeight } = useWindowDimensions();

	const [childrenHeight, setChildrenHeight] = useState<number>(0);

	useEffect(() => {
		setChildrenHeight(childrenRef.current?.offsetHeight ?? 0);
	}, []);

	return (
		<>
			<Container
				innerRef={childrenRef}
				className="modal-container"
				style={{
					minWidth: isDesktop ? '20rem' : '100%',
					height: isDesktop ? 'auto' : height || 'auto',
					overflowY: 'auto',
				}}
			>
				<Box className="modal-content-header">{HeaderComponent}</Box>
				<div style={{ height: '100%' }} ref={childrenRef}>
					{children}
				</div>
			</Container>
			<>
				<Box style={{ marginBottom: FooterComponent && childrenHeight > windowHeight ? '5rem' : 0 }} />
				<Box className="modal-content-footer">{FooterComponent}</Box>
			</>
		</>
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

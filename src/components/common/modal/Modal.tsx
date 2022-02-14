import React from 'react';
import './index.scss';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Container, Dialog } from '@material-ui/core';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
import { IModalProps } from './types';

const Modal = ({ open, onClose, children, height }: IModalProps): JSX.Element => {
	const { width } = useWindowDimensions();

	const isDesktop = width > 1024;

	const Content = () => {
		return (
			<Container
				className="modal-container"
				style={{ width: isDesktop ? '20rem' : '100%', height: isDesktop ? 'auto' : height }}
			>
				<Container>{children}</Container>
			</Container>
		);
	};

	return isDesktop ? (
		<Dialog open={open}>
			<Content />
		</Dialog>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)} className="modal-bottom-sheet">
			<Content />
		</BottomSheet>
	);
};

export default Modal;

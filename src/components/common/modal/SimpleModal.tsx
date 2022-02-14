import React from 'react';
import './index.scss';
import { Container, Typography } from '@material-ui/core';
import { ISimpleModalProps } from './types';
import Modal from './Modal';

const SimpleModal = ({
	open,
	onClose,
	children,
	footer = true,
	title,
	titleStyle,
	height,
}: ISimpleModalProps): JSX.Element => {
	return (
		<Modal open={open} onClose={onClose} height={height}>
			<>
				{title && (
					<Container>
						<Typography className="simple-modal-title" style={titleStyle}>
							{title}
						</Typography>
					</Container>
				)}
				<Container>{children}</Container>
				{footer && (
					<Container className="simple-modal-footer">
						<Typography className="simpole-modal-footer-button" onClick={() => onClose(false)}>
							닫기
						</Typography>
					</Container>
				)}
			</>
		</Modal>
	);
};

export default SimpleModal;

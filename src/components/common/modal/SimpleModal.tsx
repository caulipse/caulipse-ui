import React from 'react';
import './index.scss';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'reactjs-popup/dist/index.css';
import { Container, Dialog, Typography } from '@material-ui/core';
import useWindowDimensions from '@src/hooks/useWindowDimensions';

interface ISimpleModalProps {
	open: boolean;
	onClose: (param: boolean) => void;
	children: JSX.Element;
	footer?: boolean;
	title?: string;
	titleStyle?: React.CSSProperties;
	height?: string;
}

const SimpleModal = ({
	open,
	onClose,
	children,
	footer = true,
	title,
	titleStyle,
	height,
}: ISimpleModalProps): JSX.Element => {
	const { width } = useWindowDimensions();

	const isDesktop = width > 1024;

	const Content = () => {
		return (
			<Container
				className="simple-modal-container"
				style={{ width: isDesktop ? '20rem' : '100%', height: isDesktop ? 'auto' : height }}
			>
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
			</Container>
		);
	};

	return isDesktop ? (
		<Dialog open={open}>
			<Content />
		</Dialog>
	) : (
		<BottomSheet open={open} onDismiss={() => onClose(false)} className="simple-modal-bottom-sheet">
			<Content />
		</BottomSheet>
	);
};

export default SimpleModal;

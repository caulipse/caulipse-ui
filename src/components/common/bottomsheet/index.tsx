import { Box } from '@material-ui/core';
import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import './index.scss';

interface BottomSheetProps {
	open: boolean;
	onDismiss: () => void;
}

const BottomSheet = ({ open, onDismiss, children }: PropsWithChildren<BottomSheetProps>): JSX.Element => {
	const [isSlideOn, setIsSlideOn] = useState<boolean>(false);

	useEffect(() => {
		if (open) setIsSlideOn(true);
		else {
			setTimeout(() => {
				setIsSlideOn(false);
			}, 300);
		}
	}, [open]);

	return (
		<Box className="bottom-sheet-con" style={{ display: isSlideOn ? 'flex' : 'none' }}>
			<Box className="bottom-sheet-bg" onClick={onDismiss} />
			<Box
				className={classNames(
					'bottom-sheet-content-con',
					{ 'bottom-sheet-content-open': open },
					{ 'bottom-sheet-content-close': !open }
				)}
			>
				{children}
			</Box>
		</Box>
	);
};

export default BottomSheet;

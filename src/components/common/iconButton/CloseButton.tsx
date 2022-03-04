import React from 'react';
import { IoClose } from 'react-icons/io5';
import classnames from 'classnames';
import './index.scss';
import { IconAlignEnum, IIconButtonProps } from './types';

const CloseButton = ({ onClick, align = IconAlignEnum.right }: IIconButtonProps) => {
	return (
		<IoClose
			className={classnames('close-button', { 'align-left': align === IconAlignEnum.left })}
			onClick={onClick}
			size={24}
		/>
	);
};

export default CloseButton;

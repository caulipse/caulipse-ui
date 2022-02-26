import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import classnames from 'classnames';
import './index.scss';
import { IconAlignEnum, IIconProps } from './types';

const CloseIcon = ({ onClick, align = IconAlignEnum.right }: IIconProps) => {
	return (
		<IoCloseOutline
			className={classnames('close-icon', { 'align-left': align === IconAlignEnum.left })}
			onClick={onClick}
			size={24}
		/>
	);
};

export default CloseIcon;

import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import './index.scss';

interface ICloseIconProps {
	onClick: () => void;
}

const CloseIcon = ({ onClick }: ICloseIconProps) => {
	return <IoCloseOutline className="close-icon" onClick={onClick} size={24} />;
};

export default CloseIcon;

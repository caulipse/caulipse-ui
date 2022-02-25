import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import './index.scss';

interface IBackIconProps {
	onClick: () => void;
}

const BackIcon = ({ onClick }: IBackIconProps) => {
	return <IoArrowBackOutline className="back-icon" onClick={onClick} size={24} />;
};

export default BackIcon;

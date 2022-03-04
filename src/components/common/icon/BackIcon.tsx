import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './index.scss';
import { IIconProps } from './types';

const BackIcon = ({ onClick }: IIconProps) => {
	return <IoArrowBack className="back-icon" onClick={onClick} size={24} />;
};

export default BackIcon;

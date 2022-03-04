import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './index.scss';
import { IIconProps } from './types';

const BackButton = ({ onClick }: IIconProps) => {
	return <IoArrowBack className="back-button" onClick={onClick} size={24} />;
};

export default BackButton;

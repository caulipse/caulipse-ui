import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './index.scss';
import { IIconButtonProps } from './types';

const BackButton = ({ onClick }: IIconButtonProps) => {
	return <IoArrowBack className="back-button" onClick={onClick} size={24} />;
};

export default BackButton;

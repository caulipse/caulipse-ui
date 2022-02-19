import React from 'react';
import { IModalContainerCommonProps } from '@common/modal/types';
import AppliedModalPresenter from './AppliedModalPresenter';

const AppliedModalContainer = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
	return <AppliedModalPresenter open={open} onClose={onClose} />;
};

export default AppliedModalContainer;

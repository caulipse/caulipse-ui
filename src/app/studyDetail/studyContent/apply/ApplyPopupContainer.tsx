import React from 'react';
import ApplyPopupPresenter from './ApplyPopupPresenter';

interface ApplyPopupContainerProps {
	applySheetVisible: boolean;
	setApplySheetVisible: (param: boolean) => void;
}

const ApplyPopupContainer = ({ applySheetVisible, setApplySheetVisible }: ApplyPopupContainerProps): JSX.Element => {
	return <ApplyPopupPresenter applySheetVisible={applySheetVisible} setApplySheetVisible={setApplySheetVisible} />;
};

export default ApplyPopupContainer;

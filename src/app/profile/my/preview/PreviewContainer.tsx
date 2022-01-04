import React from 'react';
import PreviewPresenter from './PreviewPresenter';

const PreviewContainer = ():JSX.Element => {
	return (
		<div>
			<PreviewPresenter bookmarkNum={15} applyNum={0} recruitNum={2} />
		</div>
	);
};

export default PreviewContainer;

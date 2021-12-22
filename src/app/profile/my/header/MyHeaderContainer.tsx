import React from 'react';
import MyHeaderPresenter from './MyHeaderPresenter';

// interface MyHeaderContainerProps {}

const MyHeaderContainer = (): JSX.Element => {
	return (
		<div>
			<MyHeaderPresenter userName="나는야 취준생" />
		</div>
	);
};

export default MyHeaderContainer;

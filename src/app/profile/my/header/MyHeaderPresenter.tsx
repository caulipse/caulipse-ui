import React from 'react';

interface MyHeaderPresenterProps {
	userName: string;
}

const MyHeaderPresenter = ({ userName }: MyHeaderPresenterProps):JSX.Element => {
	return <div>{userName}</div>;
};

export default MyHeaderPresenter;

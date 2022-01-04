import React from 'react';
import './index.scss';

export interface EmptyComponentInterface {
	title: string;
	buttonText: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const EmptyComponent = ({ title, buttonText, onClick }: EmptyComponentInterface): JSX.Element => {
	return (
		<div className="emptyContainer">
			<div className="emptyText">{title}</div>
			<button type="button" className="emptyButton" onClick={onClick}>
				<span className="emptyButtonText">{buttonText}</span>
			</button>
		</div>
	);
};

export default EmptyComponent;

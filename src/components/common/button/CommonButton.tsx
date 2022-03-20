import React from 'react';
import { Button } from '@material-ui/core';
import classnames from 'classnames';
import { IButtonProps, ButtonTypeEnum } from './types';
import './index.scss';

const CommonButton = ({
	type = ButtonTypeEnum.primary,
	title,
	onClick,
	disabled = false,
	style,
	className,
}: IButtonProps) => {
	return (
		<Button
			disableFocusRipple
			className={classnames('common-button', { 'secondary-button': type === ButtonTypeEnum.secondary }, className)}
			style={style}
			disabled={disabled}
			onClick={onClick}
		>
			{title}
		</Button>
	);
};

export default CommonButton;

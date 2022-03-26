import { TextField, TextFieldProps } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import './index.scss';

interface CommonTextFieldProps {
	className?: string;
	placeholder: string;
	label: string;
	value: string;
	onChange: (e?: any) => void;
	textFieldProps?: TextFieldProps;
}

const CommonTextField = ({
	className,
	placeholder,
	label,
	value,
	onChange,
	textFieldProps = {},
}: CommonTextFieldProps): JSX.Element => {
	return (
		<TextField
			className={classNames('common-text-field', className)}
			variant="filled"
			placeholder={placeholder}
			label={label}
			value={value}
			onChange={onChange}
			margin="dense"
			InputProps={{ disableUnderline: true }}
			InputLabelProps={{
				style: { color: '#b4b4b4' },
			}}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...textFieldProps}
		/>
	);
};

export default CommonTextField;

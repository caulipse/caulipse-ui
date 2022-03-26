import { TextField, TextFieldProps } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import './index.scss';

interface CommonTextFieldProps {
	className?: string;
	placeholder?: string;
	children?: React.ReactNode;
	label: string;
	value: string | number;
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
	children,
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
		>
			{children}
		</TextField>
	);
};

export default CommonTextField;

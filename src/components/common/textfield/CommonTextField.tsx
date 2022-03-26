import { FormHelperText, TextField, TextFieldProps } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import './index.scss';

interface CommonTextFieldProps {
	className?: string;
	placeholder?: string;
	children?: React.ReactNode;
	label?: string;
	value: string | number;
	onChange?: (e?: any) => void;
	textFieldProps?: TextFieldProps;
	type?: 'default' | 'error' | 'success';
	helperText?: string;
}

const CommonTextField = ({
	className,
	placeholder,
	label,
	value,
	onChange,
	textFieldProps = {},
	children,
	type = 'default',
	helperText,
}: CommonTextFieldProps): JSX.Element => {
	return (
		<>
			<TextField
				className={classNames(
					'common-text-field',
					{ 'common-text-field-error': type === 'error' },
					{ 'common-text-field-success': type === 'success' },
					className
				)}
				variant="filled"
				placeholder={placeholder}
				label={label}
				value={value}
				onChange={onChange}
				margin="dense"
				InputProps={{ disableUnderline: true }}
				InputLabelProps={{
					style: { color: type === 'default' ? '#b4b4b4' : type === 'error' ? '#ec6666' : '#1574e3' },
				}}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...textFieldProps}
			>
				{children}
			</TextField>
			{helperText && type !== 'default' && (
				<FormHelperText
					className={classNames(
						{ 'common-text-field-helper-success': type === 'success' },
						{ 'common-text-field-helper-error': type === 'error' }
					)}
				>
					{helperText}
				</FormHelperText>
			)}
		</>
	);
};

export default CommonTextField;

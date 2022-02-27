import React, { ChangeEvent } from 'react';
import { Switch as MuiSwitch } from '@material-ui/core';
import './index.scss';

interface ISwitchProps {
	checked?: boolean;
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ checked, onChange }: ISwitchProps): JSX.Element => {
	return <MuiSwitch className="switch" checked={checked} onChange={onChange} />;
};

export default Switch;

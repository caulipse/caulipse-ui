import { Box, Button, Input } from '@material-ui/core';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import './inputBase.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const MAX_LENGTH = 500;

interface InputBaseProps {
	placeholder: string;
	content: string;
	setContent: (content: string) => void;
}

const InputBase = ({ placeholder, content, setContent }: InputBaseProps): JSX.Element => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const isDisabled = content.length <= 8;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value);
	};

	return (
		<Box className="inputbase-container">
			<img className="inputbase-img" src={sampleImgUrl} alt="프로필 이미지" width={40} height={40} />
			<Box className="inputbase-column-container">
				<Input
					className="inputbase-input"
					disableUnderline
					multiline
					placeholder={placeholder}
					value={content}
					onChange={onChange}
					inputProps={{ maxLength: MAX_LENGTH }}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				{isFocused && (
					<Box className="inputbase-submit-container">
						<Box className="inputbase-text-length">
							{content.length}/{MAX_LENGTH}
						</Box>
						<Button
							className={classNames('inputbase-submit-btn', { 'inputbase-submit-btn-disabled': isDisabled })}
							variant="contained"
							disabled={isDisabled}
							size="small"
							disableElevation
						>
							등록
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default InputBase;

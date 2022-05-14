import { Box, Button, Input } from '@material-ui/core';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import { userState as globalUserState } from '@src/state';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import React, { useRef, useState } from 'react';
import { getProfileImgs } from '../../utils/profileImg';
import './inputBase.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const MAX_LENGTH = 500;

interface InputBaseProps {
	placeholder: string;
	content: string;
	setContent: (content: string) => void;
	onSubmit: () => void;
}

const InputBase = ({ placeholder, content, setContent, onSubmit }: InputBaseProps): JSX.Element => {
	const [userState, setUserState] = useAtom(globalUserState);
	const { data, isLoading } = useFetchUserProfile(userState.userId);

	const [isFocused, setIsFocused] = useState<boolean>(false);
	const isDisabled = content.length <= 8;

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value);
	};

	return (
		<Box className="inputbase-container">
			{data && (
				<img
					className="inputbase-img"
					src={
						getProfileImgs().includes(data?.userProfile.image)
							? require(`@src/assets/img/profileImg/${data?.userProfile.image}`).default
							: ''
					}
					alt=""
					width={40}
					height={40}
				/>
			)}
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
					onBlur={() => {
						setTimeout(() => {
							setIsFocused(false);
						}, 300);
					}}
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
							disableElevation
							onClick={onSubmit}
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

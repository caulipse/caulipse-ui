import { useAppSelector } from '@src/hooks/appRedux';
import React from 'react';
import './inputBase.scss';

interface InputBaseProps {
	placeholder: string;
	content: string;
	setContent: (content: string) => void;
}
const InputBase = ({ placeholder, content, setContent }: InputBaseProps): JSX.Element => {
	const profilePicture = useAppSelector((state) => state.user.userInfo.profilePicture);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value);
	};

	return (
		<div className="inputbase-container">
			<img className="inputbase-img" src={profilePicture} alt="프로필 이미지" width={40} height={40} />
			<input className="inputbase-input" placeholder={placeholder} value={content} onChange={onChange} />
		</div>
	);
};

export default InputBase;

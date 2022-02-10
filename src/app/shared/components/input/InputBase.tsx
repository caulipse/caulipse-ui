import React from 'react';
import './inputBase.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';

interface InputBaseProps {
	placeholder: string;
	content: string;
	setContent: (content: string) => void;
}
const InputBase = ({ placeholder, content, setContent }: InputBaseProps): JSX.Element => {

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContent(event.target.value);
	};

	return (
		<div className="inputbase-container">
			<img className="inputbase-img" src={sampleImgUrl} alt="프로필 이미지" width={40} height={40} />
			<input className="inputbase-input" placeholder={placeholder} value={content} onChange={onChange} />
		</div>
	);
};

export default InputBase;

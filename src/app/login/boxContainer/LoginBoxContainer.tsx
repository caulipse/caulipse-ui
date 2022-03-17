import React, { useState } from 'react';
import './LoginBoxContainer.scss';
import axios from 'axios';

const boxcontainer = (): JSX.Element => {
	type ID = { email : string };
	type PW = { pw: string };
	const [inputId, setInputId] = useState<ID | null>(null);
	const [inputPw, setInputPw] = useState<PW | null>(null);

	// const handleInputId = (event:React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputId(event.target.value);
	// }

	// const handleInputPw = (event:React.ChangeEvent<HTMLInputElement>) => {
	// 	setInputPw(event.target.value);
	// }

	const onClickLoginBtn = () => {
		console.log('clicked!');
	}

	return(
        <div>
            <div className="portal">
                <form>
					{/* 밑의 value는 input안에 들어가야하는데 오류나서 빼놨습니다 */}
					{/* value={inputId} onChange={handleInputId} */}
                    <input type="email" className="portal-id" placeholder="포탈 아이디"/>
                    <input type="password" className="portal-pw" placeholder="비밀번호"/>
					{/* value={inputPw} onChange={handleInputPw} */}
					{/* 얘도 password 안에 들어가야합니다 */}
                </form>
                <button type="button" onClick={onClickLoginBtn} className="login-btn">로그인</button>
			</div>
		</div>
	);
};

export default boxcontainer;

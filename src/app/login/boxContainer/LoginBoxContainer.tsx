import React, { useState } from 'react';
import './LoginBoxContainer.scss';
import axios from 'axios';

const boxcontainer = (): JSX.Element => {
	const [inputId, setInputId] = useState(null);
	const [inputPw, setInputPw] = useState(null);

	const handleInputId = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: {value},
		} = event;
		setInputId(inputId)
	}

	const handleInputPw = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: {value},
		} = event;
		setInputPw(inputPw)
	}

	const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		console.log(inputId);
		console.log(inputPw);
	}

	const onClickLoginBtn = () => {
		console.log('clicked!');
	}

	return(
        <div>
            <div className="portal">
                <form className="input-form" onSubmit={onSubmit}>
					{/* 밑의 value는 input안에 들어가야하는데 오류나서 빼놨습니다 */}
					{/* value={inputId} onChange={handleInputId} */}
                    <input type="email" className="portal-id" placeholder="포탈 아이디" onChange={handleInputId} required pattern=".+@globex\.com"/>
                    <input type="password" className="portal-pw" placeholder="비밀번호" onChange={handleInputPw} required minLength={8}/>
					{/* value={inputPw} onChange={handleInputPw} */}
					{/* 얘도 password 안에 들어가야합니다 */}
					<button type="button" onClick={onClickLoginBtn} className="login-btn"><span className="logbtn">로그인</span></button>
				</form>
			</div>
		</div>
	);
};

export default boxcontainer;

import React, { useCallback, useState } from 'react';
import './LoginBoxContainer.scss';
import axios from 'axios';

const boxcontainer = (): JSX.Element => {
	// 이메일, 비밀번호 확인
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	// 오류메시지
	const [emailMessage, setEmailMessage] = useState<string>('');
  	const [passwordMessage, setPasswordMessage] = useState<string>('');

	// 유효성 검사
	const [isEmail, setIsEmail] = useState<boolean>(false)
  	const [isPassword, setIsPassword] = useState<boolean>(false)

	const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
	const emailRegex =/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 양식이 잘못되었습니다')
      setIsEmail(false)
    } else {
      setEmailMessage('입력완료된 텍스트입니다')
      setIsEmail(true)
    }
	},[])

	const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
		const passwordCurrent = e.target.value
		setPassword(passwordCurrent)
	
		if (!passwordRegex.test(passwordCurrent)) {
		  setPasswordMessage('가입하지 않은 아이디거나, 잘못된 비밀번호입니다')
		  setIsPassword(false)
		} else {
		  setPasswordMessage('입력완료된 텍스트입니다')
		  setIsPassword(true)
		}
	  }, [])

	const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		console.log(email);
		console.log(password);
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
                    <input type="email" className="portal-id" placeholder='포탈 아이디' onChange={onChangeEmail} />
          			{email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
					<input type="password" className="portal-pw" placeholder="비밀번호" onChange={onChangePassword}/>
          			{password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
					{/* value={inputPw} onChange={handleInputPw} */}
					{/* 얘도 password 안에 들어가야합니다 */}
					<button type="button" onClick={onClickLoginBtn} className="login-btn"><span className="logbtn">로그인</span></button>
				</form>
			</div>
		</div>
	);
};

export default boxcontainer;


import React from "react";
import './SignupBoxContainer.scss';

const SignupBoxContainer = (): JSX.Element => {
    return(
        <div>
            <div className="portal">
                <form>
                    <input type="text" className="portal-id" value="ID" placeholder="포탈 아이디"/>
                    <input type="password" className="portal-pd" value="password" placeholder="비밀번호 (특수문자를 포함한 8자 이상)"/>
                </form>
                <button type="button" className="signup-btn">가입하기</button>
                <button type="button" className="forgotten-btn">비밀번호를 잊어버리셨나요?</button>
            </div>
        </div>
    );
};

export default SignupBoxContainer;
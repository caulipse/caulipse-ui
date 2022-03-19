import React, {useState} from "react";
import './LoginFooterContainer.scss';



const FooterContainer = (): JSX.Element => {

    const onClicked = () => {
		console.log('clicked!');
	}

    return(
        <div className="login-footer">
            <span className="sign-up" onClick={onClicked}>
                회원가입
            </span>
            |
            <span className="find-pw" onClick={onClicked}>
                암호찾기
            </span>
        </div>
    );
};

export default FooterContainer; 
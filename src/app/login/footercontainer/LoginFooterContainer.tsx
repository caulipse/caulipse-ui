import React, {useState} from "react";
import './FooterContainer.scss';

const FooterContainer = (): JSX.Element => {

    return(
        <div className="login-footer">
            <span className="sign-up">
                회원가입
            </span>
            |
            <span className="find-pw">
                암호찾기
            </span>
        </div>
    );
};

export default FooterContainer;
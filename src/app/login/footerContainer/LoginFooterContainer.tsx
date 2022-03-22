import React, {useState} from "react";
import './LoginFooterContainer.scss';
import {Link} from 'react-router-dom';
import SignupPage from '../../../pages/signup';



const FooterContainer = (): JSX.Element => {

    const onClicked = () => {
		console.log('clicked!');
	}

    return(
        <div className="login-footer">
            <span className="sign-up" onClick={onClicked}>
                <Link to="/signup">회원가입</Link>
            </span>
            |
            <span className="find-pw" onClick={onClicked}>
                암호찾기
            </span>
        </div>
    );
};

export default FooterContainer; 
import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/loginLogo/LoginLogo";
import BoxContainer from "@src/app/login/boxContainer/LoginBoxContainer";
import './styles.scss';
// import CloseButton from "@src/components/common/iconButton/CloseButton";
import FooterContainer from "@src/app/login/footerContainer/LoginFooterContainer";
import { IoClose } from 'react-icons/io5';

const LoginPage = (): JSX.Element => {

    return(
        // CloseButton onClick사용법 미리님께 질문
        <div className="Login-default">
            {/* <CloseButton />  */}
            <IoClose className="close"/>
        <div className="login-logo">
            <LoginLogo />
            </div>
                <div className="login-box">
                    <BoxContainer />
                    <FooterContainer /> 
                </div>
        </div>

    );
};

export default LoginPage;
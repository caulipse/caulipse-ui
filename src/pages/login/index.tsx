import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/loginLogo/LoginLogo";
import BoxContainer from "@src/app/login/boxContainer/LoginBoxContainer";
import './styles.scss';
import CloseButton from "@src/components/common/iconButton/CloseButton";
import FooterContainer from "@src/app/login/footerContainer/LoginFooterContainer"

const LoginPage = (): JSX.Element => {

    return(
        // CloseButton onClick사용법 미리님께 질문
        <div className="Login-default">
            {/* <CloseButton />  */}
        <div className="Login-logo">
            <LoginLogo />
            </div>
                <div className="Login-Box">
                    <BoxContainer />
                    <FooterContainer /> 
                </div>
        </div>

    );
};

export default LoginPage;
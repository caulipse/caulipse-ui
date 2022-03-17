import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/loginLogo/LoginLogo";
import BoxContainer from "@src/app/login/boxContainer/LoginBoxContainer";
import './styles.scss';
import { IoClose } from 'react-icons/io5';
import FooterContainer from "@src/app/login/footerContainer/LoginFooterContainer"

const LoginPage = (): JSX.Element => {

    return(

        <div className="Login-default">
            <IoClose className="Close"/>
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
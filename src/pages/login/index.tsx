import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/loginlogo/Logins";
import BoxContainer from "@src/app/login/boxcontainer/LoginBoxContainer";
import './styles.scss';
import { IoCloseOutline } from 'react-icons/io5';
import FooterContainer from "@src/app/login/footercontainer/LoginFooterContainer"

const LoginPage = (): JSX.Element => {

    return(

        <div className="Login-default">
            <IoCloseOutline className="Close"/>
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
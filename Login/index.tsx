import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/LoginLogo/loginlogo";
import BoxContainer from "@src/app/login/BoxContainer/boxcontainer";
import './index.scss';

const LoginPage = (): JSX.Element => {

    return(
        <div>
        <div className="Login-logo">
            <LoginLogo />
            </div>
                <div className="Login-Box">
                    <BoxContainer />
                    {/* <FooterContainer />  */}
                </div>
        </div>
    );
};

export default LoginPage;
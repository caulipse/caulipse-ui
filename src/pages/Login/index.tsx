import React, { useEffect, useState } from "react";
import LoginLogo from "@src/app/login/LoginLogo/loginlogo";
import BoxContainer from "@src/app/login/BoxContainer/boxcontainer";

const LoginPage = (): JSX.Element => {

    return(
        <div className="Login-logo">
            <LoginLogo />
                <div className="Login-Box">
                    <BoxContainer />
                    {/* <FooterContainer />  */}
                </div>
        </div>
    );
};

export default LoginPage;
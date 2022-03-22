import Signuplogo from "@src/app/signup/signuplogo/SignupLogo";
import React from "react";
import './styles.scss';
import Boxcontainer from "@src/app/signup/boxcontainer/SignupBoxContainer";


const SignupPage = (): JSX.Element => {

    return(
        <div className="signup-default">
            {/* <CloseButton /> */}
            <div className="signup-logo">
                <Signuplogo />
            </div>
            <div className="signup-boxcontainer">
                <Boxcontainer />
            </div>
        </div>
);
};

export default SignupPage;  
import Signuplogo from "@src/app/signup/signuplogo/SignupLogo";
import React from "react";
import './styles.scss';
import Boxcontainer from "@src/app/signup/boxcontainer/SignupBoxContainer";
import CloseButton from "@src/components/common/iconButton/CloseButton";

const SignupPage = (): JSX.Element => {

    return(
        <div className="Signup-default">
            {/* <CloseButton /> */}
            <div className="Signup-Logo">
                <Signuplogo />
            </div>
            <div className="Signup-Boxcontainer">
                <Boxcontainer />
            </div>
        </div>
);
};

export default SignupPage;  
import Signuplogo from "@src/app/signup/signuplogo/SignupLogo";
import React from "react";
import './styles.scss';
import Boxcontainer from "@src/app/signup/boxcontainer/SignupBoxContainer";
import { IoClose } from "react-icons/io5";

const SignupPage = (): JSX.Element => {

    return(
        <div className="Signup-default">
            <IoClose className="Close"/>
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
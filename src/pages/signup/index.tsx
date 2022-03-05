import Signuplogo from "@src/app/signup/signuplogo/SignupLogo";
import React, { useEffect, useState } from "react";
import './styles.scss';
import Boxcontainer from "@src/app/signup/boxcontainer/BoxContainer";
import { IoCloseOutline } from 'react-icons/io5';

const SignupPage = (): JSX.Element => {

    return(

        <div className="Signup-default">
            <IoCloseOutline className="Close"/>
            <div className="Signup-Logo">
                <Signuplogo />
            </div>
            <div className="Signup-Boxcontainer">
                <Boxcontainer />
            </div>
            {/* <div className="Signup-Btn">
                
            </div> */}
        </div>

    );
};

export default SignupPage; 
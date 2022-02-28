import React, { useEffect, useState } from 'react';
import LoginLogo from '@src/app/login/loginLogo/loginlogo';
import BoxContainer from '@src/app/login/boxContainer/BoxContainer';

const LoginPage = (): JSX.Element => {
	return (
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

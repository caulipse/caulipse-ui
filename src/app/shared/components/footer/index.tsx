import { Box, Button } from '@material-ui/core';
import React from 'react';
import './index.scss';
import config from '@src/config';
import LogoDefaultBlueBg from '@src/assets/img/logo/logoDefaultBlueBg.svg';

const Footer: React.FC = () => (
	<Box className="footer-con">
		<Box className="footer-wrap">
			<img src={LogoDefaultBlueBg} alt="로고" className="footer-logo" />
			<Box className="footer-row">
				<Button className="footer-title" variant="text" href={`mailto:${config.mail}`}>
					서비스 피드백
				</Button>
				<Button className="footer-title mh3rem" variant="text">
					About Us
				</Button>
				<Button className="footer-title" variant="text">
					Instagram
				</Button>
			</Box>
			<Box className="footer-subtitle mt_719rem">E-mail: {config.mail}</Box>
			<Button className="footer-subtitle mt_75rem mb3rem" variant="text">
				개인정보처리방침
			</Button>
		</Box>
	</Box>
);

export default Footer;

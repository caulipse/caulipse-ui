import { Box, Button } from '@material-ui/core';
import React from 'react';
import './index.scss';
import config from '@src/config';

const Footer: React.FC = () => (
	<Box className="footer-con">
		<Box className="footer-wrap">
			<Box className="footer-row">
				<Button className="footer-title" variant="text">
					서비스 피드백
				</Button>
				<Button className="footer-title" variant="text">
					About Us
				</Button>
				<Button className="footer-title" variant="text">
					Instagram
				</Button>
			</Box>
			<Box className="footer-title mt_719rem">E-mail: {config.mail}</Box>
			<Button className="footer-title mt_75rem mb3rem" variant="text">
				개인정보처리방침
			</Button>
		</Box>
	</Box>
);

export default Footer;

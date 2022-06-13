import { Box, Button } from '@material-ui/core';
import React from 'react';
import './index.scss';
import config from '@src/config';

const Footer: React.FC = () => (
	<Box className="footer-con">
		<Box className="footer-wrap">
			<Box className="footer-row">
				<Button className="footer-title" variant="text" href={`mailto:${config.mail}`}>
					서비스 피드백
				</Button>
				<a
					className="footer-title mh3rem"
					target="_blank"
					href="https://curved-watchmaker-491.notion.site/192d070ffe1043a0bd6108c9f99f0ff9"
					rel="noreferrer"
				>
					About Us
				</a>
				<a
					className="footer-title"
					target="_blank"
					href="https://www.instagram.com/study.cau_official/"
					rel="noreferrer"
				>
					Instagram
				</a>
			</Box>
			<Box className="footer-subtitle mt_719rem">E-mail: {config.mail}</Box>
			<a href={config.privacyPolicy} className="footer-subtitle mt_75rem mb3rem">
				개인정보처리방침
			</a>
		</Box>
	</Box>
);

export default Footer;

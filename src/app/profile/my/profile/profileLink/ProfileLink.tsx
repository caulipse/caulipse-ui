import React from 'react';
import { IoLink } from 'react-icons/io5';
import './ProfileLink.scss';
import psl from 'psl';
import { Button } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useSnackbar from '@src/hooks/snackbar/useSnackbar';

interface ProfileLinkProps {
	link: string;
}

const ProfileLink = ({ link }: ProfileLinkProps): JSX.Element => {
	// Todo: url 형식이 아닌 경우에 대한 예외 처리 필요

	// const urlObject = new URL(link);
	// const parsedLink = psl.parse(urlObject?.hostname);
	const { openSnackbar } = useSnackbar();

	const onClick = () => {
		openSnackbar('클립보드에 복사되었습니다.');
	};

	return (
		<CopyToClipboard text={link}>
			<Button className="profile-link-container" onClick={onClick}>
				<IoLink size={16} className="mr8" />
				{/* <div className="mr16 profile-link-domain">{parsedLink?.sld??''}</div> */}
				<div className="profile-link-link">{link}</div>
			</Button>
		</CopyToClipboard>
	);
};

export default ProfileLink;

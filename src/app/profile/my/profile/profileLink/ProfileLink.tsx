import React from 'react';
import { IoLink } from 'react-icons/io5';
import './ProfileLink.scss';
import psl from 'psl';

interface ProfileLinkProps {
	link: string;
}

const ProfileLink = ({ link }: ProfileLinkProps): JSX.Element => {
    const urlObject = new URL(link);
	const parsedLink = psl.parse(urlObject.hostname);

	return (
		<div className="profile-link-container">
			<IoLink size={16} className="mr8" />
			<div className="mr16 profile-link-domain">{parsedLink?.sld??''}</div>
			<div className="profile-link-link">{link}</div>
		</div>
	);
};

export default ProfileLink;

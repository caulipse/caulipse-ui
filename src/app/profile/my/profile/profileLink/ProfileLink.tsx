import React from 'react';
import { IoLink } from 'react-icons/io5';
import './ProfileLink.scss';

interface ProfileLinkProps {
	link: string;
}

const ProfileLink = ({ link }: ProfileLinkProps): JSX.Element => {
	return (
		<div className="profile-link-container">
			<IoLink size={16} className="mr8" />
			<div className="mr16 profile-link-domain">Domain</div>
			<div className="profile-link-link">{link}</div>
		</div>
	);
};

export default ProfileLink;

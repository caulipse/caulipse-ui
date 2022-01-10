import React from 'react';
import './ProfileLink.scss';

interface ProfileLinkProps {
	link: string;
}

const ProfileLink = ({ link }: ProfileLinkProps): JSX.Element => {
	return <div>{link}</div>;
};

export default ProfileLink;

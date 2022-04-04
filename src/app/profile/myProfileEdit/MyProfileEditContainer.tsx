import { Container } from '@material-ui/core';
import Loader from '@src/components/common/loader/Loader';
import useFetchUserProfile from '@src/hooks/remotes/user/useFetchUserProfile';
import React from 'react';
import MyProfileEditPresenter, { UrlInterface } from './MyProfileEditPresenter';

const exampleId = '0357501b-8887-42e1-9dde-8344e0de60b0';

const MyProfileEditContainer = (): JSX.Element => {
	const { data, isLoading } = useFetchUserProfile(exampleId);
	const userProfile = data?.userProfile;

	const urlInitialValue: Array<UrlInterface> = [];

	return (
		<Container>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{userProfile && (
						<MyProfileEditPresenter
							imgSrc={userProfile.image}
							nickname={userProfile.userName}
							major={userProfile.dept}
							grade={Number(userProfile.grade)}
							onBreak={userProfile.onBreak}
							categories={userProfile.categories}
							shortIntro={userProfile.bio}
							urls={userProfile.links.reduce((acc, linkItem, linkIdx) => {
								if (linkItem) {
									return [
										...acc,
										{
											urlId: Number(linkIdx),
											url: linkItem,
										},
									];
								}
								return acc;
							}, urlInitialValue)}
							longIntro={userProfile.userAbout}
						/>
					)}
				</div>
			)}
		</Container>
	);
};

export default MyProfileEditContainer;

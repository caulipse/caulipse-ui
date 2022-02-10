import React from 'react';
import ProfilePopupPresenter from './ProfilePopupPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const sampleUserInfo = {
	userId: 'myId',
	profilePicture: sampleImgUrl,
	userName: 'jason',
	dept: '전자전기공학부',
	grade: 3,
	bio: '남',
	shortUserAbout:'짧은 자기소개글',
	userAbout: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
	links: ['https://www.naver.com/', 'https://github.com/'],
	status: '휴학중',
};

interface ProfilePopupContainerProps {
	profileSheetVisible: boolean;
	setProfileSheetVisible: (param: boolean) => void;
}

const ProfilePopupContainer = ({
	profileSheetVisible,
	setProfileSheetVisible,
}: ProfilePopupContainerProps): JSX.Element => {

	return (
		<ProfilePopupPresenter
			profileSheetVisible={profileSheetVisible}
			setProfileSheetVisible={setProfileSheetVisible}
			profilePicture={sampleUserInfo.profilePicture}
			shortUserAbout={sampleUserInfo.shortUserAbout}
			userName={sampleUserInfo.userName}
			dept={sampleUserInfo.dept}
			grade={sampleUserInfo.grade}
			status={sampleUserInfo.status}
			links={sampleUserInfo.links}
			userAbout={sampleUserInfo.userAbout}
			tags={['CPA', '토익 스피킹', '면접']}
		/>
	);
};

export default ProfilePopupContainer;

import MyBtns from '@src/app/profile/my/btns';
import MyHeaderContainer from '@src/app/profile/my/header/MyHeaderContainer';
import NotificationsContainer from '@src/app/profile/my/notifications/NotificationsContainer';
import PreviewContainer from '@src/app/profile/my/preview/PreviewContainer';
import { useAppDispatch } from '@src/hooks/appRedux';
import { fetchUserInfo } from '@src/store/modules/user';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const sampleUserInfo = {
	userId: 'myId',
	profilePicture: sampleImgUrl,
	userName: 'jason',
	dept: '전자전기공학부',
	grade: 3,
	bio: '남',
	userAbout: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
	links: ['https://www.naver.com/', 'https://github.com/'],
	status: '휴학중',
};
interface MyPageParamsInterface {
	userId: string;
}

const MyPage = (): JSX.Element => {
	const params = useParams<MyPageParamsInterface>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserInfo(sampleUserInfo));
	}, []);
	
	return (
		<div className="my-page-container">
			<MyHeaderContainer />
			<div className="my-page-boxes">
				<PreviewContainer />
				<NotificationsContainer />
				<MyBtns />
			</div>
		</div>
	);
};

export default MyPage;

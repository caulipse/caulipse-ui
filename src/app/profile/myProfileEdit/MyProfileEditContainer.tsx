import React from 'react';
import MyProfileEditPresenter from './MyProfileEditPresenter';

const sampleImgUrl = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg';
const sampleCategories = [
	'항목 텍스트 1',
	'항목 텍스트 2',
	'항목 테스트 3',
	'항목 테스트 4',
	'항목 테스트 5',
	'항목 테스트 6',
];
const sampleLongIntro=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.`;

const MyProfileEditContainer = (): JSX.Element => {
	return (
		<div>
			<MyProfileEditPresenter
				imgSrc={sampleImgUrl}
				nickname="닉네임"
				major="전자전기공학부"
				grade={3}
				status="휴학중"
				categories={sampleCategories}
				shortIntro="안녕하세요"
				urls={[{ urlId: 0, url: 'www.naver.com' }]}
				longIntro={sampleLongIntro}
			/>
		</div>
	);
};

export default MyProfileEditContainer;

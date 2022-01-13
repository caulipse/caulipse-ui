import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import './index.scss';

const navigations = [
	{
		label: '계정 정보',
		navigateTo: '1',
	},
	{
		label: '문의하기',
		navigateTo: '2',
	},
	{
		label: '공지사항',
		navigateTo: '3',
	},
];

const MyBtns = (): JSX.Element => {
	return (
		<div className="my-btns-container">
			{navigations?.map((item) => (
				<button type="button" key={item.label}>
					{item.label === '문의하기' ? (
						<a href="mailto:caulipse814@gmail.com" className="navigation-item-container">
							<div className="navigation-item-label">{item.label}</div>
							<IoChevronForward size={24} color="#b1b1b1" />
						</a>
					) : (
						<div className="navigation-item-container">
							<div className="navigation-item-label">{item.label}</div>
							<IoChevronForward size={24} color="#b1b1b1" />
						</div>
					)}
				</button>
			))}
		</div>
	);
};

export default MyBtns;

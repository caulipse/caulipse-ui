import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import './index.scss';

const ACCOUNT_INFO = '계정 정보';
const ASK = '문의하기';
const NOTICE = '공지사항';

const navigations = [
	{
		label: ACCOUNT_INFO,
	},
	{
		label: ASK,
	},
	{
		label: NOTICE,
	},
];

const MyBtns = (): JSX.Element => {


	return (
		<div className="my-btns-container">
			{navigations?.map((item) => (
				<button type="button" key={item.label}>
					{item.label === ASK ? (
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

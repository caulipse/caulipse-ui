import { MainCategoryType } from './types';
import { STUDY_SORT_OPTION_ENUM } from './enum';
import { orderByMapper } from './app/shared/utils/studyMapper';

export const isDesktop = window.screen.width > 1024;

export const NOTIFICATION_TYPE = {
	NEW_APPLICANT: 101,
	NEW_COMMENT: 102,
	EDIT_STUDY: 103,
	NEW_COMMENT_METOO: 104,
	ACCEPT: 105,
	CANCEL_APPLY: 106,
	STUDY_FINISH: 107,
	NEW_NOTICE: 201,
};

export const categories: MainCategoryType[] = [
	{
		label: '어학',
		path: 'language',
		code: 100,
		subCategories: [
			{
				label: 'TOEIC',
				code: 101,
			},
			{
				label: 'TOEIC Speaking',
				code: 102,
			},
			{
				label: 'OPIC',
				code: 103,
			},
			{
				label: '기타',
				code: 104,
			},
		],
	},
	{
		label: '취업',
		path: 'employment',
		code: 200,
		subCategories: [
			{
				label: '면접 준비',
				code: 201,
			},
			{
				label: '인적성',
				code: 202,
			},
			{
				label: 'NCS',
				code: 203,
			},
			{
				label: 'GSAT',
				code: 204,
			},
			{
				label: '기타',
				code: 205,
			},
		],
	},
	{
		label: '프로그래밍',
		path: 'programming',
		code: 300,
		subCategories: [
			{
				label: '프론트엔드, 모바일',
				code: 301,
			},
			{
				label: '백엔드',
				code: 302,
			},
			{
				label: '데이터 과학',
				code: 303,
			},
			{
				label: '프로그래밍 언어',
				code: 304,
			},
			{
				label: 'CS',
				code: 305,
			},
			{
				label: '기타 (게임,보안 등)',
				code: 306,
			},
		],
	},
	{
		label: '고시공무원',
		path: 'exam',
		code: 400,
		subCategories: [
			{
				label: 'CPA, 세무사, 관세사',
				code: 401,
			},
			{
				label: '9급, 7급, 5급, 임용',
				code: 402,
			},
			{
				label: '리트, 변리사',
				code: 403,
			},
			{
				label: '행정, 언론',
				code: 404,
			},
			{
				label: '기타 (게임,보안 등)',
				code: 405,
			},
		],
	},
	{
		label: '자격증',
		path: 'certificate',
		code: 500,
		subCategories: [
			{
				label: 'afpk, cfp',
				code: 501,
			},
			{
				label: '산업기사',
				code: 502,
			},
			{
				label: '기타',
				code: 503,
			},
		],
	},
	{
		label: '생활',
		path: 'daily',
		code: 600,
		subCategories: [
			{
				label: '기상',
				code: 601,
			},
			{
				label: '카공, 도서관',
				code: 602,
			},
			{
				label: '기타',
				code: 603,
			},
		],
	},
	{
		label: '공모전',
		path: 'competition',
		code: 700,
		subCategories: [
			{
				label: '공모전',
				code: 701,
			},
		],
	},
];

// export const sortOptions = [
// 	{ value: STUDY_SORT_OPTION_ENUM.CREATED_AT_DESC, label: '최신순' },
// 	{ value: STUDY_SORT_OPTION_ENUM.CREATED_AT_ASC, label: '오래된 순' },
// 	{ value: STUDY_SORT_OPTION_ENUM.VACANCY_DESC, label: '남은 인원: 많은 순' },
// 	{ value: STUDY_SORT_OPTION_ENUM.VACANCY_ASC, label: '남은 인원: 적은 순' },
// ];

export const sortOptions = Object.entries(orderByMapper).map(([key, value]) => {
	return {
		value: key,
		label: value,
	};
});

// FIXME 수정
export default categories;

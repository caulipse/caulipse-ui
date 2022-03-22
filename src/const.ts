import { MainCategoryType } from './types';

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

export const NOTIFICATION_LABEL = {
	[NOTIFICATION_TYPE.NEW_APPLICANT]: {
		title: '새로운 신청자',
		content: '[신청자_닉네임]님이 신청 수락을 기다리고 있어요!',
	},
	[NOTIFICATION_TYPE.NEW_COMMENT]: {
		title: '새로운 문의글',
		content: '새 문의글이 달렸어요',
	},
	[NOTIFICATION_TYPE.EDIT_STUDY]: {
		title: '모집정보 수정',
		content: '신청한 스터디의 모집 정보가 수정되었어요',
	},
	[NOTIFICATION_TYPE.NEW_COMMENT_METOO]: {
		title: '답글',
		content: '작성하신 문의글에 답글이 달렸어요',
	},
	[NOTIFICATION_TYPE.ACCEPT]: {
		title: '참가완료',
		content: '참가신청이 수락되었어요.',
	},
	[NOTIFICATION_TYPE.CANCEL_APPLY]: {
		title: '참가 취소',
		content: '스터디의 참가가 취소되었습니다',
	},
	[NOTIFICATION_TYPE.STUDY_FINISH]: {
		title: '모집 종료',
		content: '모집이 마감되었습니다',
	},
	[NOTIFICATION_TYPE.NEW_NOTICE]: {
		title: '새로운 공지',
		content: '새로운 공지가 등록되었습니다',
	},
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
		label: '고시/공무원',
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
		subCategories: [],
	},
];

export const sortOptions = [
	{ value: 'created_at:desc', label: '최신순' },
	{ value: 'created_at:asc', label: '오래된 순' },
	{ value: 'vacancies:desc', label: '남은 인원: 많은 순' },
	{ value: 'vacancies:asc', label: '남은 인원: 적은 순' },
];

// FIXME 수정
export default categories;

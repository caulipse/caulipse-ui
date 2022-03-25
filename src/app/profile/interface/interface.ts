import number from '@src/app/shared/utils/number';
import { ReactSVG } from 'react';

export interface StudyInterface {
	studyId: number;
	// name?:string;
	title: string;
	currentNumber: number;
	maxNumber: number;
	// date?:Date;
	// tags?:string[]
}

export interface ArticleInterface {
	articleId: number;
	title: string;
	author: string;
	recommendation: number;
	isBookmark: boolean;
}

export interface EmptyComponentInterface {
	title: string;
	description: string;
	buttonText?: string;
	buttonColor?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	myBackgroundColor?: string;
}

export interface RecruitingStudyInterface extends StudyInterface {
	category: string;
	newInquiry: number;
	newApplicant: number;
}

export interface RecruitedStudyInterface extends StudyInterface {
	date: Date;
	name: string;
	tags: string[];
}

export interface BookmarkInterface extends StudyInterface {
	date: Date;
	hits: number;
	stars: number;
	category: string;
}

export interface UserInfoInterface {
	userId: string;
	profilePicture: string;
	userName: string;
	dept: string;
	grade: number;
	bio: string;
	userAbout: string;
	links: string[];
	status: string;
}
export interface AppliedStudyInterface extends StudyInterface {
	date: Date;
	hits: number;
	bookmarks: number;
	status: string;
}

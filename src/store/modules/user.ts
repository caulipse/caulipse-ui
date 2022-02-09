import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookmarkInterface, AppliedStudyInterface, UserInfoInterface } from '@src/app/profile/interface/interface';

export interface BookmarkStateType {
	recruitingBookmarks: BookmarkInterface[];
	recruitedBookmarks: BookmarkInterface[];
}

export interface AppliedStudiesStateType {
	openedAppliedStudies: AppliedStudyInterface[];
	closedAppliedStudies: AppliedStudyInterface[];
}

export interface RecruitingStudiesStateType {
	openedRecruitingStudies: AppliedStudyInterface[];
	closedRecruitingStudies: AppliedStudyInterface[];
}

export interface NoticeInterface {
	noticeId: string;
	title: string;
	content: string;
	createdAt: Date;
}

export interface NoticeStateType{
	notices:NoticeInterface[]
}

export interface UserType {
	userInfo: UserInfoInterface | Record<string, never>;
	bookmarks: BookmarkStateType;
	appliedStudies: AppliedStudiesStateType;
	recruitingStudies: RecruitingStudiesStateType;
	notices: NoticeInterface[];
}

const initialState: UserType = {
	userInfo: {},
	bookmarks: {
		recruitingBookmarks: [],
		recruitedBookmarks: [],
	},
	appliedStudies: {
		openedAppliedStudies: [],
		closedAppliedStudies: [],
	},
	recruitingStudies: {
		openedRecruitingStudies: [],
		closedRecruitingStudies: [],
	},
	notices: [],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUserInfo: (state, action: PayloadAction<any>) => {
			/* eslint-disable no-param-reassign */
			state.userInfo = action.payload;
		},
		setBookmarks: (state, action: PayloadAction<BookmarkStateType>) => {
			state.bookmarks = {
				recruitingBookmarks: action.payload.recruitingBookmarks,
				recruitedBookmarks: action.payload.recruitedBookmarks,
			};
		},
		setAppliedStudies: (state, action: PayloadAction<AppliedStudiesStateType>) => {
			state.appliedStudies = {
				openedAppliedStudies: action.payload.openedAppliedStudies,
				closedAppliedStudies: action.payload.closedAppliedStudies,
			};
		},
		setRecruitingStudies: (state, action: PayloadAction<RecruitingStudiesStateType>) => {
			state.recruitingStudies = {
				openedRecruitingStudies: action.payload.openedRecruitingStudies,
				closedRecruitingStudies: action.payload.closedRecruitingStudies,
			};
		},
		setNotices: (state, action: PayloadAction<NoticeStateType>) => {
			state.notices = action.payload.notices;
		},
	},
});

export const { fetchUserInfo, setBookmarks, setAppliedStudies, setRecruitingStudies, setNotices } = userSlice.actions;

export default userSlice.reducer;

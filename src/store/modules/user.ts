import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookmarkInterface, AppliedStudyInterface, UserInfoInterface } from '@src/app/profile/interface/interface';

interface BookmarkStateType {
	recruitingBookmarks: BookmarkInterface[];
	recruitedBookmarks: BookmarkInterface[];
}

interface AppliedStudiesStateType {
	openedAppliedStudies: AppliedStudyInterface[];
	closedAppliedStudies: AppliedStudyInterface[];
}

interface RecruitingStudiesStateType {
	openedRecruitngStudies: AppliedStudyInterface[];
	closedRecruitingStudies: AppliedStudyInterface[];
}

export interface UserType {
	userInfo: UserInfoInterface | Record<string, never>;
	bookmarks: BookmarkStateType;
	appliedStudies: AppliedStudiesStateType;
	recruitingStudies: RecruitingStudiesStateType;
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
		openedRecruitngStudies: [],
		closedRecruitingStudies: [],
	},
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
				openedRecruitngStudies: action.payload.openedRecruitngStudies,
				closedRecruitingStudies: action.payload.closedRecruitingStudies,
			};
		},
	},
});

export const { fetchUserInfo, setBookmarks, setAppliedStudies, setRecruitingStudies } = userSlice.actions;

export default userSlice.reducer;

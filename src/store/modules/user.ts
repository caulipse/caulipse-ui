import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookmarkInterface, UserInfoInterface } from '@src/app/profile/interface/interface';

interface BookmarkStateType {
	recruitingBookmarks: BookmarkInterface[];
	recruitedBookmarks: BookmarkInterface[];
}

interface AppliedStudiesStateType {
	openedAppliedStudies: BookmarkInterface[];
	closedAppliedStudies: BookmarkInterface[];
}

export interface UserType {
	userInfo: UserInfoInterface | Record<string, never>;
	bookmarks: BookmarkStateType;
	appliedStudies: AppliedStudiesStateType;
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
	},
});

export const { fetchUserInfo, setBookmarks, setAppliedStudies } = userSlice.actions;

export default userSlice.reducer;

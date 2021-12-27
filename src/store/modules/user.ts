import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookmarkInterface, UserInfoInterface } from '@src/app/profile/interface/interface';

interface BookmarkStateType {
	recruitingBookmarks: BookmarkInterface[];
	recruitedBookmarks: BookmarkInterface[];
}
export interface UserType {
	userInfo: UserInfoInterface | Record<string, never>;
	bookmarks: BookmarkStateType;
}

const initialState: UserType = {
	userInfo: {},
	bookmarks: {
		recruitingBookmarks: [],
		recruitedBookmarks: [],
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUserInfo: (state, action: PayloadAction<UserInfoInterface>) => {
			/* eslint-disable no-param-reassign */
			state.userInfo = action.payload;
		},
		setBookmarks: (state, action: PayloadAction<BookmarkStateType>) => {
			state.bookmarks = {
				recruitingBookmarks: action.payload.recruitingBookmarks,
				recruitedBookmarks: action.payload.recruitedBookmarks,
			};
		},
	},
});

export const { fetchUserInfo, setBookmarks } = userSlice.actions;

export default userSlice.reducer;

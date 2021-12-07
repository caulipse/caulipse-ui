import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
	userInfo: any;
}

const initialState: UserType = {
	userInfo: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUserInfo: (state, action: PayloadAction<any>) => {
            /* eslint-disable no-param-reassign */
			state.userInfo = action.payload;
		},
	},
});

export const { fetchUserInfo } = userSlice.actions;

export default userSlice.reducer;

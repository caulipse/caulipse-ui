import { Study } from '../types';

export interface IResponseGetBookmarks {
	message: string;
	bookmarks: Study[];
}

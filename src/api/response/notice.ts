import { Notice } from '../types';

export interface getNoticeInterface {
	message: string;
	notice: Notice;
}

export interface getNoticesInterface {
	data: Notice[];
	pages: number;
}

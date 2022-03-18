import { Comment } from '../types';

export interface IResponseGetStudyComments {
	message: string;
	comments: Comment[];
}

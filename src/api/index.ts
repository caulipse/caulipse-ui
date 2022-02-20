import axios from 'axios';
import config from '@src/config';
import { IRequestLogin } from './request/user';
import { IRequestPostStudyUser } from './request/studyUser';
import {
	IRequestPostStudyComment,
	IRequestPatchStudyComment,
	IRequestDeleteStudyComment,
} from './request/studyComment';

const client = axios.create({
	baseURL: `${config.server}/api`,
});

const API = {
	// 스터디 북마크 등록
	postBookmark(id: string) {
		return client.post(`/study/${id}/bookmark`);
	},
	// 스터디 북마크 취소
	deleteBookmark(id: string) {
		return client.delete(`/study/${id}/bookmark`);
	},
	// 스터디 문의글 목록 조회
	getStudyComments(id: string) {
		return client.get(`/study/${id}/comment`);
	},
	// 스터디 문의글 등록
	postStudyComment(request: IRequestPostStudyComment) {
		return client.post(`/study/${request.id}/comment`, request);
	},
	// 스터디 문의글 수정
	patchStudyComment(request: IRequestPatchStudyComment) {
		return client.post(`/study/${request.id}/comment/${request.commentId}`, request);
	},
	// 스터디 문의글 삭제
	deleteStudyComment(request: IRequestDeleteStudyComment) {
		return client.post(`/study/${request.id}/comment/${request.commentId}`, request);
	},
	// 스터디 문의글의 나도 궁금해요 카운트
	getStudyCommentMetoo(id: string, commentId: string) {
		return client.get(`/study/${id}/comment/${commentId}/metoo`);
	},
	// 스터디 문의글에 나도 궁금해요 등록
	postStudyCommentMetoo(id: string, commentId: string) {
		return client.post(`/study/${id}/comment/${commentId}/metoo`);
	},
	// 나도 궁금해요 해제
	deleteStudyCommentMetoo(id: string, commentId: string) {
		return client.delete(`/study/${id}/comment/${commentId}/metoo`);
	},
	// 스터디 목록 조회
	getStudies() {
		// TODO parameters
		return client.get(`/study`);
	},
	// 스터디 상세 조회
	getStudy(id: string) {
		// TODO parameters
		return client.get(`/study/${id}`);
	},
	// 스터디 삭제
	deleteStudy(id: string) {
		return client.delete(`/study/${id}`);
	},
	// 참가 신청 중인 사용자 목록 조회
	getStudyUsers(id: string) {
		return client.get(`/study/user/${id}`);
	},
	// 스터디 참가 신청
	postStudyUser(request: IRequestPostStudyUser) {
		return client.post(`/study/user/${request.id}`, request);
	},
	// 로그인
	login(request: IRequestLogin) {
		return client.post(`/user/login`, request);
	},
};

export default API;

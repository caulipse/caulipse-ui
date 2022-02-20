import axios from 'axios';
import config from '@src/config';
import { IRequestLogin } from './request/user';
import { IRequestPostStudyUser } from './request/studyUser';

const client = axios.create({
	baseURL: `${config.server}/api`,
});

const API = {
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
	// 스터디 문의글 목록 조회
	getStudyComments(id: string) {
		return client.get(`/study/${id}/comment`);
	},
	// 스터디 문의글의 나도 궁금해요 카운트 조회
	getStudyCommentMetoo(id: string, commentId: string) {
		return client.get(`/study/${id}/comment/${commentId}/metoo`);
	},
	// 로그인
	login(request: IRequestLogin) {
		return client.post(`/user/login`, request);
	},
};

export default API;

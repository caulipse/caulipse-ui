import axios from 'axios';
import config from '@src/config';
import { IRequestLogin, IRequestSignUp, IRequestPatchUser, IRequestPostUserProfile } from './request/user';
import { IRequestPostStudy, IRequestPatchStudy } from './request/study';
import { IRequestPostStudyUser, IRequestPatchStudyUser, IRequestPatchStudyUserByHost } from './request/studyUser';
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
	// 새로운 스터디 생성
	postStudy(request: IRequestPostStudy) {
		return client.post(`/study`, request);
	},
	// 스터디 아이디에 해당하는 스터디 정보 조회
	getStudy(id: string) {
		return client.get(`/study/${id}`);
	},
	// 스터디 정보 업데이트
	patchStudy(request: IRequestPatchStudy) {
		return client.post(`/study/${request.id}`, request);
	},
	// 스터디 삭제
	deleteStudy(id: string) {
		return client.delete(`/study/${id}`);
	},
	// 현재 참가 신청 중인 사용자 목록을 읽어옵니다.
	getStudyUsers(id: string) {
		return client.get(`/study/user/${id}`);
	},
	// 스터디 참가 신청
	postStudyUser(request: IRequestPostStudyUser) {
		return client.post(`/study/user/${request.id}`, request);
	},
	// 참가신청 현황 수정
	patchStudyUser(request: IRequestPatchStudyUser) {
		return client.patch(`/study/user/${request.id}`, request);
	},
	// 참가신청 취소
	deleteStudyUser(id: string) {
		return client.delete(`/study/user/${id}`);
	},
	// 참가신청 수락 / 거절
	patchStudyUserByHost(request: IRequestPatchStudyUserByHost) {
		return client.patch(`/study/user/${request.id}/accept`, request);
	},
	// 로그인
	login(request: IRequestLogin) {
		return client.post(`/user/login`, request);
	},
	// 회원가입
	signUp(request: IRequestSignUp) {
		return client.post(`/user`, request);
	},
	// 회원 탈퇴
	deleteUser() {
		return client.delete(`/user`);
	},
	// 회원정보 수정
	patchUser(request: IRequestPatchUser) {
		return client.patch(`/user/${request.id}`, request);
	},
	// 유저 프로필 생성
	postUserProfile(request: IRequestPostUserProfile) {
		return client.post(`/user/profile`, request);
	},
};

export default API;

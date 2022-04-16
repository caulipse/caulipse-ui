/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import config from '@src/config';
import { IFilterOption, IPaginationOption } from '@src/app/study/types';
import { IRequestLogin, IRequestSignUp, IRequestPatchUser } from './request/user';
import { IRequestPostUserProfile, IRequestPatchUserProfile } from './request/userProfile';
import { IRequestPostStudy, IRequestPatchStudy } from './request/study';
import { IRequestPostStudyUser, IRequestPatchStudyUser, IRequestPatchStudyUserByHost } from './request/studyUser';
import {
	IRequestPostStudyComment,
	IRequestPatchStudyComment,
	IRequestDeleteStudyComment,
} from './request/studyComment';

const client = axios.create({
	baseURL: `${config.server}/api`,
	withCredentials: true,
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
		return client.delete(`/study/${request.id}/comment/${request.commentId}`);
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
	getStudies(orderBy?: string, filter?: IFilterOption, pagination?: IPaginationOption) {
		// FIXME
		// 멀티 필터 가능하도록 수정
		return client.get('/study', {
			params: {
				order_by: orderBy,
				frequency: filter?.frequency?.[0],
				location: filter?.location?.[0],
				weekday: filter?.weekday?.[0],
				categoryCode: filter?.categoryCode?.[0]?.code,
				limit: pagination?.limit ?? 15,
				pageNo: pagination?.pageNo ?? 1,
			},
		});
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
		return client.patch(`/study/${request.id}`, request.data);
	},
	// 스터디 삭제
	deleteStudy(id: string) {
		return client.delete(`/study/${id}`);
	},
	// 현재 참가 중인 사용자 목록을 읽어옵니다.
	getStudyParticipants(id: string) {
		return client.get(`/study/user/${id}/participants`);
	},
	// 현재 참가 신청 중인 사용자 목록을 읽어옵니다.
	getStudyUsers(id: string) {
		return client.get(`/study/user/${id}`);
	},
	// 스터디 참가 신청
	postStudyUser(request: IRequestPostStudyUser) {
		return client.post(`/study/user/${request.id}`, request.data);
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
		return client.patch(`/study/user/${request.id}/accept`, request.data);
	},
	// 로그인
	login(request: IRequestLogin) {
		return client.post(`/user/login`, request);
	},
	// 로그아웃
	logout() {
		return client.patch('/user/logout');
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
	// 사용자의 알림 목록을 읽어옵니다.
	getUserNotifications() {
		return client.get(`/user/notification`);
	},
	// 사용자의 알림 확인 상태를 갱신합니다.
	patchUserNotifications(id: string) {
		return client.patch(`/user/notification/${id}`);
	},
	// 사용자의 알림 항목을 삭제합니다.
	deleteUserNotifications(id: string) {
		return client.delete(`/user/notification/${id}`);
	},
	// 유저 프로필 생성
	postUserProfile(request: IRequestPostUserProfile) {
		return client.post(`/user/profile/${request.userId}`, request);
	},
	// 유저 프로필 조회
	getUserProfile(id: string) {
		return client.get(`/user/profile/${id}`);
	},
	// 유저 프로필 업데이트
	patchUserProfile(request: IRequestPatchUserProfile) {
		return client.patch(`/user/profile/${request.userId}`, request);
	},
	// 공지 사항 목록 조회
	getNotices(offset?: number, limit?: number) {
		return client.get('/notice', {
			params: {
				offset,
				limit,
			},
		});
	},
	// 공지 사항 단건 조회
	getNotice(id: string) {
		return client.get(`/notice/${id}`);
	},
	// 유저 정보 조회
	getUser() {
		return client.get('/user');
	},
	// 북마크 리스트 조회
	getBookmarks() {
		return client.get('/user/bookmark');
	},
	// 모집중인 스터디
	getMyStudies() {
		return client.get('/study/my-study');
	},
	// 신청 스터디
	getAppliedStudies() {
		return client.get('/user/study/applied');
	},
	getSearchStudies(keyword: string, frequency?: string, weekday?: string, location?: string, orderBy?: string) {
		return client.get('/study/search', {
			params: {
				keyword,
				frequency,
				weekday,
				location,
				order_by: orderBy,
			},
		});
	},
};

export default API;

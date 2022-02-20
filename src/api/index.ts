import axios from 'axios';
import config from '@src/config';

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
	// 참가 신청 중인 사용자 목록 조회
	getStudyUsers(id: string) {
		return client.get(`/study/user/${id}`);
	},
};

export default API;

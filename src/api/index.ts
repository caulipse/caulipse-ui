import axios from 'axios';
import config from '@src/config';

const client = axios.create({
	baseURL: `${config.server}/api`,
});

const API = {
	// 스터디 리스트 조회
	getStudies() {
		// TODO parameters
		return client.get(`/study`);
	},
	// 스터디 상세 조회
	getStudy(id: string) {
		// TODO parameters
		return client.get(`/study/${id}`);
	},
};

export default API;

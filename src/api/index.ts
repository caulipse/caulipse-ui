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
};

export default API;

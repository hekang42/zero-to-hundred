import axios from 'axios';

const serviceKey = process.env.SERVICEKEY;

export function getPost() {
	return axios.get(`https://api.corona-19.kr/korea/?serviceKey=` + serviceKey);
}

export function getPostNew() {
	return axios.get(`https://api.corona-19.kr/korea/country/new/?serviceKey=` + serviceKey);
}
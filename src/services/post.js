import axios from 'axios';

const serviceKey = process.env.SERVICE_KEY;

export function getPost() {
	console.log(process.env.SERVICE_KEY);
	return axios.get(`https://api.corona-19.kr/korea/?serviceKey=` + serviceKey);
}

export function getPostNew() {
	return axios.get(`https://api.corona-19.kr/korea/country/new/?serviceKey=` + serviceKey);
}
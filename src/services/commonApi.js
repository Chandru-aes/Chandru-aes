import axios from "axios";
const BASE_URL = "http://172.16.9.253:5005/api/";

const headers = {
	Accept: "application/json",
	"Content-Type": "application/json"
};
export const postApiCall = (url, payload) => {
	console.log(url, payload, " ==== commonAPI === ")
	return axios({
		headers: headers,
		method: "post",
		url: BASE_URL + `${url}`,
		data: payload,
	}).then(response => {
		return response;
	});
};

export const getApiCall = (url, payload={})  => {
	console.log(url, payload)
	return axios({
		method: "get",
		headers: headers,
		url: BASE_URL + `${url}`,
		data: payload,
	}).then(response => {
		return response;
	});
};

const put = (url, payload) => {
	return axios({
		method: "put",
		headers: headers,
		url: BASE_URL + `${url}`,
		data: payload,
	}).then(response => {
		return response;
	});
};
export const API_SERVICE = {
	put: put
};

/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'http://localhost:3000/v1';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
	});

	api.interceptors.request.use((config: AxiosRequestConfig) => {
		const token = getToken();

		if (!config.headers) {
			config.headers = {};
		}

		if (token) {
			config.headers.authorization = `Bearer ${token}`;
		}

		return config;
	});

	return api;
};

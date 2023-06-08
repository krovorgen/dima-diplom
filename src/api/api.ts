import axios from 'axios';
import { UserType } from '../redux/features/authSlice';

const instance = axios.create({
  baseURL: 'https://a18323-716d.g.d-f.pw',
});
const instanceAuth = axios.create({
  baseURL: 'https://a18323-716d.g.d-f.pw',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
  },
});
instanceAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `token ${localStorage.getItem('token')}`;
  return config;
});
export const api = {
  getTrees() {
    return instance.get(`/tree/`);
  },
  checkLogin() {
    return instanceAuth.get(`/auth/me/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
  },
  login(userData: { username: string; password: string }) {
    return instance.post(`/auth/login/`, {
      ...userData,
    });
  },
  registration(userData: Partial<UserType>) {
    return instance.post(`/auth/register/`, userData);
  },
  nonAuthSendForm(data: {
    name_question: string;
    phone_question: string;
    non_auth_question: string;
  }) {
    return instance.post(`/orders/non_auth_question/`, data);
  },
  authSendForm(data: { auth_question: string }) {
    return instanceAuth.post(`/orders/auth_question/`, data);
  },
};

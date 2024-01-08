import axios from 'axios';
import { UserState } from '@/store/modules/user/types';
import { LoginData, LoginRes, RegisterData } from './types';

export function register(data: RegisterData) {
  return axios.post('/user/register', data);
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/user/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/user/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/user/info');
}

import axios from 'axios';
import { UserState } from '@/store/modules/user/types';
import { LoginData, LoginRes } from './types';

export function login(data: LoginData) {
  return axios.post<LoginRes>('/user/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/user/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/user/info');
}

import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginRes extends UserState {
  token: string;
}

export interface RegisterData extends LoginData {
  username: string;
}

import axios from 'axios';

import {
  UserRecord,
  UserParams,
  UserListResponse,
  UserListParams,
} from './types';

// 分页查询
export function queryPage(data: UserListParams) {
  return axios.post<UserListResponse>(
    `/user/page/${data.current}/${data.pageSize}`,
    data
  );
}

// 添加
export function addUser(data: UserParams) {
  return axios.post<UserRecord>(`/user`, data);
}

// 删除
export function delUser(id: number) {
  return axios.delete<UserRecord>(`/user/${id}`);
}

// 修改
export function editUser(data: UserParams) {
  return axios.put<UserRecord>(`/user`, data);
}

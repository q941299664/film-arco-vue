import axios from 'axios';

import {
  DictRecord,
  DictParams,
  DictListResponse,
  DictListParams,
} from './types';

// 分页查询
export function queryPage(data: DictListParams) {
  return axios.post<DictListResponse>(
    `/dict/page/${data.current}/${data.pageSize}`,
    data
  );
}
// 查询列表
export function queryList(data: DictParams) {
  return axios.get<DictRecord>(`/dict`, {
    data,
  });
}

// 添加
export function addDict(data: DictParams) {
  return axios.post<DictRecord>(`/dict`, data);
}

// 删除
export function delDict(id: number) {
  return axios.delete<DictRecord>(`/dict/${id}`);
}

// 修改
export function editDict(data: DictParams) {
  return axios.put<DictRecord>(`/dict`, data);
}

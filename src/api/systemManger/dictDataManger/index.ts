import axios from 'axios';

import {
  DictDataRecord,
  DictDataTree,
  DictDataParams,
  DictDataListResponse,
  DictDataListParams,
} from './types';

// 分页查询
export function queryPage(data: DictDataListParams) {
  return axios.post<DictDataListResponse>(
    `/dict-data/page/${data.current}/${data.pageSize}`,
    data
  );
}
// 查询列表
export function queryList(data: DictDataParams) {
  return axios.post<DictDataTree[]>(`/dict-data/query`, data);
}
// 根据code获取顶层字典数据
export function listByCode(code: string) {
  return queryList({
    code,
    parentId: 0,
  });
}

// 添加
export function addDictData(data: DictDataParams) {
  return axios.post<DictDataRecord>(`/dict-data`, data);
}

// 删除
export function delDictData(id: number) {
  return axios.delete<DictDataRecord>(`/dict-data/${id}`);
}

// 修改
export function editDictData(data: DictDataParams) {
  return axios.put<DictDataRecord>(`/dict-data`, data);
}

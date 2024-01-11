import axios from 'axios';
import qs from 'query-string';
import { RoleResponse, RoleParams } from './types';

export function queryPage(data: RoleParams) {
  return axios.post<RoleResponse>(
    `/role/page/${data.current}/${data.pageSize}`,
    data
  );
}

export default queryPage;

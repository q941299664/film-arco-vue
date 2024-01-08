import axios from 'axios';
import qs from 'query-string';
import { RoleResponse, RoleParams } from './types';

export function queryPage(params: RoleParams) {
  return axios.get<RoleResponse>(
    `/role/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

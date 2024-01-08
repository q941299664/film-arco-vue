import axios from 'axios';
import qs from 'query-string';
import { UserResponse, UserParams } from './types';

export function queryPage(params: UserParams) {
  return axios.get<UserResponse>(
    `/user/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

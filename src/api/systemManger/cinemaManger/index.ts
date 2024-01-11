import axios from 'axios';
import qs from 'query-string';
import { CinemaListParams, CinemaListResponse } from './types';

// 分页查询
export function queryPage(data: CinemaListParams) {
  return axios.post<CinemaListResponse>(
    `/cinema/page/${data.current}/${data.pageSize}`,
    data
  );
}
export default queryPage;

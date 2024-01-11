import axios from 'axios';
import qs from 'query-string';
import { MovieListParams, MovieListResponse } from './types';

// 分页查询
export function queryPage(data: MovieListParams) {
  return axios.post<MovieListResponse>(
    `/movie/page/${data.current}/${data.pageSize}`,
    data
  );
}
export default queryPage;

import axios from 'axios';
import qs from 'query-string';
import { MovieResponse, MovieParams } from './types';

export function queryPage(params: MovieParams) {
  return axios.get<MovieResponse>(
    `/movie/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

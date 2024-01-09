import axios from 'axios';
import qs from 'query-string';
import { CinemaResponse, CinemaParams } from './types';

export function queryPage(params: CinemaParams) {
  return axios.get<CinemaResponse>(
    `/cinema/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

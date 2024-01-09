import axios from 'axios';
import qs from 'query-string';
import { ShowtimeResponse, ShowtimeParams } from './types';

export function queryPage(params: ShowtimeParams) {
  return axios.get<ShowtimeResponse>(
    `/showtime/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

import axios from 'axios';
import qs from 'query-string';
import { ShowtimeResponse, ShowtimeParams } from './types';

export function queryPage(data: ShowtimeParams) {
  return axios.post<ShowtimeResponse>(
    `/showtime/page/${data.current}/${data.pageSize}`,
    data
  );
}

export default queryPage;

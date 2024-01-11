import axios from 'axios';
import qs from 'query-string';
import { HallResponse, HallParams } from './types';

export function queryPage(data: HallParams) {
  return axios.post<HallResponse>(
    `/hall/page/${data.current}/${data.pageSize}`,
    data
  );
}

export default queryPage;

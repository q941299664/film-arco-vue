import axios from 'axios';
import qs from 'query-string';
import { HallResponse, HallParams } from './types';

export function queryPage(params: HallParams) {
  return axios.get<HallResponse>(
    `/hall/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

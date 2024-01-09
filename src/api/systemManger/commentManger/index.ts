import axios from 'axios';
import qs from 'query-string';
import { CommentResponse, CommentParams } from './types';

export function queryPage(params: CommentParams) {
  return axios.get<CommentResponse>(
    `/comment/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

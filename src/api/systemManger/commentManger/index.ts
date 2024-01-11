import axios from 'axios';
import qs from 'query-string';
import { CommentResponse, CommentParams } from './types';

export function queryPage(data: CommentParams) {
  return axios.post<CommentResponse>(
    `/comment/page/${data.current}/${data.pageSize}`,
    data
  );
}

export default queryPage;

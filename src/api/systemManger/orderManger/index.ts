import axios from 'axios';
import qs from 'query-string';
import { OrderResponse, OrderParams } from './types';

export function queryPage(data: OrderParams) {
  return axios.post<OrderResponse>(
    `/order/page/${data.current}/${data.pageSize}`,
    data
  );
}

export default queryPage;

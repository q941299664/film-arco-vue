import axios from 'axios';
import qs from 'query-string';
import { OrderResponse, OrderParams } from './types';

export function queryPage(params: OrderParams) {
  return axios.get<OrderResponse>(
    `/order/page/${params.current}/${params.pageSize}`,
    {
      params,
    }
  );
}

export default queryPage;

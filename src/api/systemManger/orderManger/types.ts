import { BaseEntity } from '@/api/types';

export interface OrderResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface OrderParams extends Partial<OrderResponse> {
  current: number;
  pageSize: number;
}

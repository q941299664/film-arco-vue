import { BaseEntity } from '@/api/types';

export interface MovieResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface MovieParams extends Partial<MovieResponse> {
  current: number;
  pageSize: number;
}

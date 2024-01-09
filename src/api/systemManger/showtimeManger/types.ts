import { BaseEntity } from '@/api/types';

export interface ShowtimeResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface ShowtimeParams extends Partial<ShowtimeResponse> {
  current: number;
  pageSize: number;
}

import { BaseEntity } from '@/api/types';

export interface CinemaResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface CinemaParams extends Partial<CinemaResponse> {
  current: number;
  pageSize: number;
}

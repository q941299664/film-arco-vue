import { BaseEntity } from '@/api/types';

export interface HallResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface HallParams extends Partial<HallResponse> {
  current: number;
  pageSize: number;
}

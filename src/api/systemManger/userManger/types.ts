import { BaseEntity } from '@/api/types';

export interface UserResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface UserParams extends Partial<UserResponse> {
  current: number;
  pageSize: number;
}

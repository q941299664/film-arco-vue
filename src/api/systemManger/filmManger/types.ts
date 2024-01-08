import { BaseEntity } from '@/api/types';

export interface RoleResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface RoleParams extends Partial<RoleResponse> {
  current: number;
  pageSize: number;
}

import Role from '@/api/permission/types';
import { BaseEntity } from '@/api/types';

export interface UserState extends BaseEntity {
  username?: string;
  email?: string;
  roles: Role[];
}

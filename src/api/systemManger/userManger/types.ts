import { BaseEntity, PageParams, PageResponse } from '@/api/types';
// 列表元素实体
export interface UserRecord extends BaseEntity {
  username: string;
  email: string;
}

// 列表查询参数
export interface UserListParams extends Partial<UserRecord>, PageParams {}

// 列表返回结果
export type UserListResponse = PageResponse<UserRecord>;

// 提交表单参数
export type UserParams = Partial<UserRecord>;

export interface UserForm extends UserParams {
  password?: string;
}

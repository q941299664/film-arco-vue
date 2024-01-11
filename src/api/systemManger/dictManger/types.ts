import { BaseEntity, PageParams, PageResponse } from '@/api/types';
// 列表元素实体
export interface DictRecord extends BaseEntity {
  dictname: string;
  email: string;
}

// 列表查询参数
export interface DictListParams extends Partial<DictRecord>, PageParams {}

// 列表返回结果
export type DictListResponse = PageResponse<DictRecord>;

// 提交表单参数
export type DictParams = Partial<DictRecord>;

export interface DictForm extends DictParams {
  password?: string;
}

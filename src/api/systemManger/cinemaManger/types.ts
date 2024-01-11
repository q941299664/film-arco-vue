import { BaseEntity, PageParams, PageResponse } from '@/api/types';

export interface CinemaRecord extends BaseEntity {
  name: string;
  address: string;
}

// 列表查询参数
export type CinemaListParams = Partial<CinemaRecord> & PageParams;

// 列表返回结果
export type CinemaListResponse = PageResponse<CinemaRecord>;

// 提交表单参数
export type CinemaParams = Partial<CinemaRecord>;

export type CinemaForm = CinemaParams;

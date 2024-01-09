import { BaseEntity } from '@/api/types';

export interface CommentResponse extends BaseEntity {
  username: string;
  email: string;
}

export interface CommentParams extends Partial<CommentResponse> {
  current: number;
  pageSize: number;
}

import { BaseEntity } from '@/api/types';

export default interface Role extends BaseEntity {
  /**
   * 是否默认
   */
  isDefault?: boolean | null;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 上一级角色ID
   */
  parentId?: number | null;
}

export interface HttpResponse<T = unknown> {
  msg: string;
  code: number;
  data: T;
}

export interface BaseEntity {
  /**
   * 创建者ID，插入时自动填充
   */
  createId?: number | null;
  /**
   * 创建时间，插入时自动填充
   */
  createTime?: null | string;
  /**
   * 逻辑删除标志，0 表示未删除，1 表示已删除
   */
  deleted?: boolean | null;
  /**
   * 数据库主键ID（自增）
   */
  id?: number | null;
  /**
   * 更新者ID
   */
  updateId?: number | null;
  /**
   * 更新时间，插入和更新时自动填充
   */
  updateTime?: null | string;
}

import { BaseEntity, PageParams, PageResponse } from '@/api/types';
// 列表元素实体
export interface DictDataRecord extends BaseEntity {
  /**
   * 字典编码
   */
  code: string;
  /**
   * 样式属性
   */
  cssStyle: string;
  /**
   * 是否默认
   */
  isDefault: string;
  /**
   * 字典标签
   */
  label: string;
  /**
   * 值
   */
  value: string;
  /**
   * 表格回显样式
   */
  listStyle: string;
  /**
   * 上一级字典数据ID
   */
  parentId: number;
  /**
   * 备注
   */
  remark: string;
  /**
   * 排序依据字段
   */
  sort: number;
}

// 列表查询参数
export type DictDataListParams = Partial<DictDataRecord> & PageParams;
export interface DictDataTree extends Partial<DictDataRecord> {
  /**
   * 是否选中
   */
  checked: boolean;
  /**
   * 孩子数组
   */
  children?: DictDataTree[];
}

// 列表返回结果
export type DictDataListResponse = PageResponse<DictDataRecord>;

// 提交表单参数
export type DictDataParams = Partial<DictDataRecord>;

export type DictDataForm = DictDataParams;

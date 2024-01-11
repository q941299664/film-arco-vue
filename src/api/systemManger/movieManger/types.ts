import { BaseEntity, PageParams, PageResponse } from '@/api/types';

export interface MovieRecord extends BaseEntity {
  /**
   * 票房
   */
  boxOffice: number;
  /**
   * 演职人员
   */
  castAndCrew: string;
  /**
   * 电影详情
   */
  description: string;
  /**
   * 导演
   */
  director: string;
  /**
   * 电影时长
   */
  duration: number;
  /**
   * 电影类型
   */
  genre: string;
  /**
   * 电影参评人数
   */
  numberOfReviews: number;
  /**
   * 国外名称
   */
  originalTitle: string;
  /**
   * 电影海报地址
   */
  posterUrl: string;
  /**
   * 制片地区
   */
  productionRegion: string;
  /**
   * 电影评分
   */
  rating: number;
  /**
   * 上映时间
   */
  releaseDate: string;
  /**
   * 电影状态
   */
  status: string;
  /**
   * 电影名称
   */
  title: string;
}

// 列表查询参数
export type MovieListParams = Partial<MovieRecord> & PageParams;

// 列表返回结果
export type MovieListResponse = PageResponse<MovieRecord>;

// 提交表单参数
export type MovieParams = Partial<MovieRecord>;

export type MovieForm = MovieParams;

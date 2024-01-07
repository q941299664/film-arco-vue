import axios from 'axios';
import { RouteRecordNormalized } from 'vue-router';

export function getMenuList() {
  return axios.get<RouteRecordNormalized[]>('/permission/menus');
}

export function getPermissionList() {
  return axios.get<RouteRecordNormalized[]>('/permission');
}

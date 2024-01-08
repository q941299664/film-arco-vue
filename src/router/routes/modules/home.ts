import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const home: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.home',
    requiresAuth: true,
    icon: 'icon-home',
    order: 0,
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('@/views/home/index.vue'),
      meta: {
        locale: 'menu.home.index',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default home;

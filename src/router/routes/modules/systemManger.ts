import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const systemManger: AppRouteRecordRaw = {
  path: '/systemManger',
  name: 'systemManger',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.systemManger',
    requiresAuth: true,
    icon: 'icon-settings',
    order: 0,
  },
  children: [
    {
      path: 'userManger',
      name: 'userManger',
      component: () => import('@/views/systemManger/userManger/index.vue'),
      meta: {
        locale: 'menu.userManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'roleManger',
      name: 'roleManger',
      component: () => import('@/views/systemManger/roleManger/index.vue'),
      meta: {
        locale: 'menu.roleManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'filmManger',
      name: 'filmManger',
      component: () => import('@/views/systemManger/filmManger/index.vue'),
      meta: {
        locale: 'menu.filmManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default systemManger;

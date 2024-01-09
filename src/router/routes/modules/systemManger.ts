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
      path: 'movieManger',
      name: 'movieManger',
      component: () => import('@/views/systemManger/movieManger/index.vue'),
      meta: {
        locale: 'menu.movieManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // {
    //   path: 'cinemaManger',
    //   name: 'cinemaManger',
    //   component: () => import('@/views/systemManger/cinemaManger/index.vue'),
    //   meta: {
    //     locale: 'menu.cinemaManger',
    //     icon: 'icon-user',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    {
      path: 'hallManger',
      name: 'hallManger',
      component: () => import('@/views/systemManger/hallManger/index.vue'),
      meta: {
        locale: 'menu.hallManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // {
    //   path: 'showtimeManger',
    //   name: 'showtimeManger',
    //   component: () => import('@/views/systemManger/showtimeManger/index.vue'),
    //   meta: {
    //     locale: 'menu.showtimeManger',
    //     icon: 'icon-user',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    {
      path: 'commentManger',
      name: 'commentManger',
      component: () => import('@/views/systemManger/commentManger/index.vue'),
      meta: {
        locale: 'menu.commentManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'orderManger',
      name: 'orderManger',
      component: () => import('@/views/systemManger/orderManger/index.vue'),
      meta: {
        locale: 'menu.orderManger',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default systemManger;

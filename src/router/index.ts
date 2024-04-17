import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          info: 'WELCOME TO 墨客'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        meta: {
          title: '详情'
        },
        component: () => import('@/views/detail/index.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        meta: {
          title: '设置'
        },
        component: () => import('@/views/setting/index.vue')
      },
      {
        path: '/classify',
        name: 'classify',
        meta: {
          title: '文章分类'
        },
        component: () => import('@/views/classify/index.vue')
      },
      {
        path: '/tag',
        name: 'tag',
        meta: {
          title: '文章标签'
        },
        component: () => import('@/views/tag/index.vue')
      },
      {
        path: '/timeline',
        name: 'timeline',
        meta: {
          title: '时间轴'
        },
        component: () => import('@/views/timeline/index.vue')
      },
      {
        path: '/create',
        name: 'create',
        meta: {
          title: '文章发布'
        },
        component: () => import('@/views/create/index.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        meta: {
          title: '实用工具'
        },
        component: () => import('@/views/tools/index.vue')
      },
      {
        path: '/picture',
        name: 'picture',
        meta: {
          title: '图片集'
        },
        component: () => import('@/views/picture/index.vue')
      },
      {
        path: '/author',
        name: 'author',
        meta: {
          title: '关于博主'
        },
        component: () => import('@/views/author/index.vue')
      },
      {
        path: '/personal',
        name: 'personal',
        meta: {
          title: '个人主页'
        },
        component: () => import('@/views/personal/index.vue')
      }
    ],
    redirect: { name: 'home' }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

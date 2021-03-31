import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/broadcast',
    name: 'Broadcast',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../views/EmptyView.vue'),
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../views/EmptyView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

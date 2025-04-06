import {createRouter, createWebHistory} from 'vue-router';

import PostPage from '@/pages/PostsPage.vue';
import MainPage from '@/pages/MainPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/posts', component: PostPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

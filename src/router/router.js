import {createRouter, createWebHistory} from 'vue-router';

import PostsPage from '@/pages/PostsPage.vue';
import MainPage from '@/pages/MainPage.vue';
import PostPage from '@/pages/PostPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/posts', component: PostsPage },
  { path: '/posts/:postId', component: PostPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const base = window.__POWERED_BY_QIANKUN__ ? '/sub-app3' : '/';

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
  ],
});

export default router;


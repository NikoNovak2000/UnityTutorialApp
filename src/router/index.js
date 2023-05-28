import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Skripta from '../views/Skripta.vue';
import Video from '../views/Video.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skripta',
    name: 'Skripta',
    component: Skripta,
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

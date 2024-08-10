import { createRouter, createWebHistory } from 'vue-router'
import todoapp from '../views/todoapp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: todoapp
    },
    {
      path: '/mathquiz',
      name: 'mathquiz',
      component: () => import('../views/MathQuiz.vue')
    },
    {
      path: '/MusicPlayer',
      name: 'MusicPlayer',
      component: () => import('../views/MusicPlayer.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/Library.vue')
    },
    {
      path: '/searchbar',
      name: 'searchbar',
      component: () => import('../components/SearchBar.vue')
    },
    {
      path: '/bookform',
      name: 'bookform',
      component: () => import('../components/BookForm.vue')
    },
    {
      path: '/booklist',
      name: 'booklist',
      component: () => import('../components/BookList.vue')
    },
  ]
})

export default router

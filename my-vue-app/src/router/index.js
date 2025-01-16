import { createRouter, createWebHistory } from 'vue-router'
import BookList from '@/components/BookList.vue'
import AddBook from '@/components/AddBook.vue'
import AppCart from '@/components/AppCart.vue'
import AppAbout from '../components/AppAbout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'list', component: BookList },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AppAbout
    },
    {
      path: '/form/:id?',
      name: 'form',
      component: AddBook
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart
    }
  ],

})

export default router
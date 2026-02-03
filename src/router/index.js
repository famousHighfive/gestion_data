import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import Services from '@/views/Services.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/about',
      name: 'about',
      component: APropos,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

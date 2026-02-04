import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Article from '@/views/Article.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import DetailArticle from '@/views/DetailArticle.vue'
import NotFound from '@/views/NotFound.vue'
import Services from '@/views/Services.vue'
import Test from '@/views/Test.vue'

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
      path: '/contact/',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/article/',
      name: 'article',
      component: Article,
    },
    {
      path: '/detail-article/:id',
      name: 'detail-article',
      component: DetailArticle,
    },
    {
      path: '/test/',
      name: 'test',
      component: Test,
    },
    { path: '/:pathMatch(.*)*',
      component: NotFound 
    }
  ],
})

export default router

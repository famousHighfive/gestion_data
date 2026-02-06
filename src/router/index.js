import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import DetailArticle from '@/views/DetailArticle.vue'
import NotFound from '@/views/NotFound.vue'
import Services from '@/views/Services.vue'
import Test from '@/views/Test.vue'
import DetailBlog from '@/views/DetailBlog.vue'
import ItemArticle from '@/views/ItemArticle.vue'
import SignUp from '@/views/connexion/SignUp.vue'
import LogIn from '@/views/connexion/LogIn.vue'
import Infos from '@/views/blog/Infos.vue'
import InfosBenin from '@/views/blog/InfosBenin.vue'
import InfosInternational from '@/views/blog/InfosInternational.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
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
      children: [
        {path: '',name: 'infos', component: Infos},
        {path: 'infos-benin',name: 'infos-benin', component: InfosBenin},
        {path: 'infos-inter', name: 'infos-inter', component: InfosInternational},
      ]
    },
    {
      path: '/blog-detail/:id',
      name: 'myBlog',
      component: DetailBlog,
    },
    // {
    //   path: '/blog-detail/:id',
    //   name: 'blog-detail',
    //   component: DetailBlog,
    // },
    {
      path: '/contact/',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/article/',
      name: 'article',
      component: ItemArticle,
    },
    {
      path: '/detail-article/:id',
      name: 'detail-article',
      component: DetailArticle,
    },
    {
      path: '/login/',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/signup/',
      name: 'signup',
      component: SignUp,
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

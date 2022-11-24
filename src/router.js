const { createRouter, createWebHistory } = require('vue-router');
import CoachesList from './pages/coaches/CoachesList.vue'
import CoacheDetail from './pages/coaches/CoacheDetail.vue'
import CoacheRegistration from './pages/coaches/CoacheRegistration.vue'
import ContactCoache from './pages/requests/ContactCoache.vue'
import RequestsReceive from './pages/requests/RequestsReceive.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoacheDetail,
      children: [
        {
          path: 'contact',
          component: ContactCoache,
        },
      ],
    },
    {
      path: '/register',
      component: CoacheRegistration,
    },
    {
      path: '/requests',
      component: RequestsReceive,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;

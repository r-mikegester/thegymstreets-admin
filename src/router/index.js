import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/auth/LoginPage.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'tabs/Dashboard'
      },
      {
        path: 'Dashboard',
        component: () => import('@/views/DashboardPage.vue')
      },
      {
        path: 'Members',
        component: () => import('@/views/MembersPage.vue')
      },
      {
        path: 'Profile',
        component: () => import('@/views/ProfilePage.vue')
      },
      {
        path: 'Workouts',
        component: () => import('@/views/WorkoutsPage.vue')
      },

      {
        path: '/search',
        name: 'Search',
        component: () => import('../components/SearchPage.vue')
      },
      {
        path: '/newsfeed',
        name: 'Newsfeed',
        component: () => import('../pages/NewsFeed.vue')
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../components/ChartsJS.vue')
      },
      {
        path: '/addclients',
        name: 'addclients',
        component: () => import('../pages/AddClients.vue')
      },
      {
        path: '/addcoaches',
        name: 'addcoaches',
        component: () => import('../pages/AddCoaches.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router;

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
    redirect: '/tabs/Dashboard'
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
        path: '/settings',
        name: 'Settings',
        component: () => import('../components/SettingsPage.vue')
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

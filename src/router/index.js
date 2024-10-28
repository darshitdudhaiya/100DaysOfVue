import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeComponent.vue'
import Login from '../components/LoginComponent.vue'
import Dashboard from '../components/DashboardComponent.vue'
import { reactive } from 'vue'
import authStore from '@/store/authStore'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global before guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; 
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); 
  } else {
    next(); 
  }
});

export default router

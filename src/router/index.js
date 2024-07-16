import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { backgroundColor: '#DAE2E9' } // Definindo a cor de fundo para a página inicial
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Adicione um `afterEach` para definir a cor de fundo de acordo com a meta
router.afterEach((to) => {
  document.body.style.backgroundColor = to.meta.backgroundColor || '#ffffff'; // Altere a cor de fundo ou defina uma cor padrão
})

export default router

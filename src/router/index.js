import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/pessoas',
    name: 'pessoas',
    component: () => import('../components/PessoaList.vue')
  },
  {
    path: "/pessoas/:id",
    name: "pessoa-details",
    component: () => import("../components/Pessoa.vue")
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('../components/ProdutoList.vue')
  },
  {
    path: "/produtos/:id",
    name: "produto-details",
    component: () => import("../components/Produto.vue")
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('../components/PedidoList.vue')
  },
  {
    path: "/pedidos/:id",
    name: "pedidos-details",
    component: () => import("../components/Pedido.vue")
  },
  {
    path: '/sobre',
    name: 'sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

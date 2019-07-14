import Vue from 'vue'
import Router from 'vue-router'

import vistaPrincipal from './views/vistaPrincipal.vue'
import vistaClientes from './views/vistaClientes.vue'
import vistaDetallePropuesta from './views/vistaDetallePropuesta.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: vistaPrincipal
    },
    {
      path: '/clientes',
      name: 'sideBar',
      component: vistaClientes
    },
    {
      path: '/detProp',
      name: 'detallePropuesta',
      component: vistaDetallePropuesta
    }
    
  ]
})
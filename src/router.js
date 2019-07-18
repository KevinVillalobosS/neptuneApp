import Vue from 'vue'
import Router from 'vue-router'

import vistaPrincipal from './views/vistaPrincipal.vue'
import vistaLogIn from './views/vistaLogIn.vue'
import vistaClientes from './views/vistaClientes.vue'
import subVistaDetallePropuesta from './views/subVistaDetallePropuesta.vue'
import subVistaDetalleCliente from './views/subVistaDetalleCliente.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/propuestas',
      name: 'dashboard',
      component: vistaPrincipal
    },
    {
      path: '/',
      name: 'logIn',
      component: vistaLogIn
    },
    {
      path: '/clientes',
      name: 'sideBar',
      component: vistaClientes
    },
    {
      path: '/detProp',
      name: 'detallePropuesta',
      component: subVistaDetallePropuesta
    },
    {
      path: '/detCliente',
      name: 'detalleCliente',
      component: subVistaDetalleCliente
    }
    
  ]
})
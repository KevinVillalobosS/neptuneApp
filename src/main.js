import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import router from './router.js'


import jQuery from 'jquery';


Vue.use(VueMaterial)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

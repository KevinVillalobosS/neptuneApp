<template>
 <v-app class="app">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">JAPOTIR</a>
        </div>
      </nav>
      <div class="side">
        <side-bar></side-bar>
      </div>
      <div class="componentes">
        <router-view/>
      </div>
 </v-app>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
import Propuestas from './components/Propuestas.vue'
import Tabla from './components/Tabla.vue'

export default {
  name: "app",
  components: {
    HelloWorld: HelloWorld,
    SideBar: SideBar,
    Propuestas: Propuestas,
    Tabla: Tabla
  }
}

</script>

<style>

.app{
  height: 100% !important;
  background-color: #566d6d !important;
}

.nav-wrapper{

    background-color: #00898c !important;
}

/*.side {
      width: 19%  !important;
       height: 100% !important;
    width: 80% !important;
    }


.componentes{
    margin-left: 19.5% !important;
    height: 100% !important;
    width: 80% !important;
} */

</style>
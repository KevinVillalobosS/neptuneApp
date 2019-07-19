<template>
    <div id="es">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">JUPITER</a>
        </div>
      </nav>
      <div class="side">
        <side-bar></side-bar>
      </div>
        <Clientes></Clientes>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import SideBar from '../components/SideBar.vue'
import Clientes from '../components/Clientes.vue'
import Tabla from '../components/Tabla.vue'

export default {
  name: "vistaClientes",
  components: {
    HelloWorld: HelloWorld,
    SideBar: SideBar,
    Clientes: Clientes,
    Tabla: Tabla
  }
}

</script>


<style scoped>
.vistaClientes{
    margin-left: 19.5% !important;
    height: 100% !important;
    width: 80% !important;
} 
</style>

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
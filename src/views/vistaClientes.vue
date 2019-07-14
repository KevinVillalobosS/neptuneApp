<template>
    <div id="es">
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


<template>
    <div id="es">
      <Propuestas></Propuestas>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import SideBar from '../components/SideBar.vue'
import Propuestas from '../components/Propuestas.vue'
import Tabla from '../components/Tabla.vue'

export default {
  name: "vistaPrincipal",
  components: {
    HelloWorld: HelloWorld,
    SideBar: SideBar,
    Propuestas: Propuestas,
    Tabla: Tabla
  }
}


</script>
<template>
    <div id="es">
      <DetallesPropuesta></DetallesPropuesta>
    </div>
</template>

<script>
import DetallesPropuesta from '../components/DetallesPropuesta.vue'
import SideBar from '../components/SideBar.vue'
import Propuestas from '../components/Propuestas.vue'
import Tabla from '../components/Tabla.vue'

export default {
  name: "vistaDetallePropuesta",
  components: {
    DetallesPropuesta: DetallesPropuesta,
    Propuestas: Propuestas,
  }
}


</script>
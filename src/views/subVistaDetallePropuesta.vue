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
      <DetallesPropuesta></DetallesPropuesta>
    </div>
</template>

<script>
import DetallesPropuesta from '../components/DetallesPropuesta.vue'
import SideBar from '../components/SideBar.vue'

export default {
  name: "subVistaDetallePropuesta",
  components: {
    DetallesPropuesta: DetallesPropuesta,
    SideBar: SideBar,
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
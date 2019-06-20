<template>
 <div id="app">
    <div id="es">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">JAPOTIR</a>
        </div>
      </nav>
      <side-bar></side-bar>

      <Propuestas></Propuestas>
    </div>
  </div>
 
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

#es{
  background-color: black !important;
  height: 100% !important;
}

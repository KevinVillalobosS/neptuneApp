<template>
    <div className='sidenav'>
      <ul id="slide-out" class="sidenav sidenav-fixed">
         <li><div class="user-view">
            <div class="background">
            </div>
            <a href="#user"><img class="circle" src="..\assets\persona.png"></a>
            <a href="#name"><span class="white-text name">nombre apellido</span></a>
            <a href="#rol"><span class="white-text email">rol</span></a>
        </div></li>
        <li>
          <router-link to="/clientes"> Clientes</router-link>
        </li>
         <li>
          <router-link to="/propuestas">Propuestas</router-link>
        </li>
        <li><a href="#!">Perfiles</a></li>
        <li><a href="#!">Estadisticas</a></li>
        <li><a href="#!">Ayuda</a></li>
      </ul>
      <a href="#" data-target="slide-out" className = 'caso' class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</template>

<script>
export default {
  props: ['nombre','apellido','rol'],
  name: 'SideBar'
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav a{
      color: black !important;
      font-style: italic;

      
    }

    .background{
      background-color: #035557 !important;


    }

    .sidenav {
      background-color: #00898c !important;
      width: 19% ;
    }

    header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }



</style>

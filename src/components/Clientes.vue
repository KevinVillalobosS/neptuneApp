<template>
    <div class="row">
        <TablaClientes
           :tipo = 'tipo'
           :datos = "datos"
        ></TablaClientes>
    </div>
</template>

<script>
import TablaClientes from './TablaClientes.vue'
const axios = require('axios');
  
    export default {
        name: 'Clientes',
        components: {
            TablaClientes: TablaClientes
        },
        mounted() {
          axios
            .get("http://localhost:9000/api/clientes/clientes")
            .then(response => {
                this.datos = response.data;
            })
        },
        data() {
            return {
                datos: [],
                tipo: "CLIENTES"
            }
        },
        methods:{
            crear1() {
                 return "asfasfasf"
            }
        }
    }

        
   


</script>

<style scoped>

.row{
    margin-left: 19.5% ;
    height: 100% !important;
    width: 80% !important;
}



</style>

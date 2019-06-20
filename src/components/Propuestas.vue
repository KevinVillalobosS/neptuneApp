<template>
    <div class="row">
        <Tabla 
           :propuestas = "info"
        
        ></Tabla>
    </div>
</template>

<script>
import Tabla from './Tabla.vue'
const axios = require('axios');
  
    export default {
        name: 'Propuestas',
        components: {
            Tabla: Tabla
        },
        mounted() {
          axios
            .get("http://localhost:9000/api/main/all")
            .then(response => {
                this.data = response.data;
                this.data.forEach( (elemento) => {
                    console.log(elemento);
                });
                this.info = response.data;
            })
        },
        data() {
            return {
                info: []
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
    margin-left: 19.5%;
    height: 100% !important;
    width: 80% !important;
}



</style>

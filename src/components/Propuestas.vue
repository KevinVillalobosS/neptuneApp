<template>
    <div class="row">
        <Tabla 
            :propuestas = "info"
            :tipo = "tipo"
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
            .get("http://localhost:9000/api/main/propuestas")
            .then(response => {
                this.info = response.data;
                console.log(this.info);
            })/*,
            axios
            .get("http://localhost:9000/api/clientes/clientes")
            .then(response => {
                this.info = response.data;
                console.log(this.info);
            })*/
        },
        data() {
            return {
                info: [],
                tipo: "PROPUESTAS"
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

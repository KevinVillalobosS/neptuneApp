<template>
    <div class="Detalles">
        <v-card>
                <v-card-title>
                <span class="headline">DATOS DEL CLIENTE</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Nombre del Cliente" :value="this.$route.params.cliente.nombreCliente"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Evaluación" :value="this.$route.params.cliente.evaluacionCliente+'/5'"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Rubro del Cliente" :value="this.$route.params.cliente.rubroCliente" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Email de Contacto" :value="this.$route.params.cliente.emailCliente" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Fono de Contacto" :value="this.$route.params.cliente.fonoCliente"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Estado" :value="this.$route.params.cliente.estadoCliente"></v-text-field>
                            </v-flex>
                        </v-layout>                      
                    </v-container>
                </v-card-text>
            </v-card>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <Tabla 
                :propuestas = "info"
                :tipo = "tipo"
                :clientes = "clientes"
            ></Tabla>
            
            
    </div>

</template>

<script>

import Tabla from '../components/Tabla.vue'

const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  name: "DetalleCliente",
  props: ['cliente'],
  components: {
    Tabla: Tabla,
  },
  mounted() {
          let json = JSON.stringify({
                idCliente: this.$route.params.cliente.idCliente,
                nombreCliente: this.$route.params.cliente.nombreCliente,
                rubroCliente:this.$route.params.cliente.rubroCliente,
                evaluacionCliente: this.$route.params.cliente.evaluacionCliente,
                emailCliente:this.$route.params.cliente.emailCliente,
                estadoCliente: this.$route.params.cliente.estadoCliente});
        console.log(json);
          axios
            .post("http://localhost:9000/api/main/propuestasCliente", json)
            .then(response => {
                this.info = response.data;
                console.log(this.info);
            })
            axios
            .get("http://localhost:9000/api/clientes/clientes")
            .then(response => {
                this.clientes = response.data;
                console.log(this.info);
            })
        },
        data() {
            return {
                info: [],
                clientes: [],
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

.Detalles{
    margin-left: 19.5% ;
    width: 80% !important;
    /* background-color: gray !important; */
}


.v-card__text{
    padding: 0px !important;
}

.headline {
    line-height: 0px !important;
    /* font-size: 24px; */
}
.container{
    padding: 19px;
}

</style>



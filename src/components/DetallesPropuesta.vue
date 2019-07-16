<template>
    <div>
    <v-tabs fixed-tabs>
        <v-tab :key="1"> Datos Generales </v-tab>
        <v-tab :key="2"> Archivos de Desarrollo  </v-tab>
        <v-tab :key="3"> Archivos de Económicos  </v-tab>
        <!-- CUERPO: !-->
        <v-tab-item :key="1">
            <v-card>
                <v-card-title>
                <span class="headline">PROPUESTA TITANIUM</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md3>
                                <v-text-field readonly label="Nombre Propuesta" value="Propuesta TITANIUM"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field readonly label="Nombre Cliente" value="FACH"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field readonly label="Fecha de Creación" value="05/03/2019" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field readonly label="Estado" value="Pendiente" ></v-text-field>
                            </v-flex>
                        </v-layout>                      
                    </v-container>
                </v-card-text>
            </v-card>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-card>
                <v-card-title>
                <span class="headline">DATOS DEL CLIENTE</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Nombre del Cliente" value="FACH"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Evaluación" value="4/5"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Rubro del Cliente" value="Transporte" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Email de Contacto" value="email@email.cl" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Fono de Contacto" value="9-12345678"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field readonly label="Estado" value="Activo"></v-text-field>
                            </v-flex>
                        </v-layout>                      
                    </v-container>
                </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="2">
            <Archivos></Archivos>
            <!--
             <div class="container">
                <div class="large-12 medium-12 small-12 cell">
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                </label>
                    <button v-on:click="submitFile()">Submit</button>
                </div>
            </div> !-->
        </v-tab-item>
    </v-tabs>      
    </div>

</template>

<script>

import Archivos from '../components/Archivos.vue'

export default {
  name: "DetallePropuesta",
  components: {
    Archivos: Archivos,
  }
}

</script>

<style scoped>

.v-tabs{
    margin-left: 19.5% ;
    width: 80% !important;
    /* background-color: gray !important; */
    background-color:whitesmoke;
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



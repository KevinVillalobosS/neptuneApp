<template>
  <div>
    <!-- Tabla !-->
    <v-toolbar flat color="white">
      <v-toolbar-title> ARCHIVOS DE DESARROLLO </v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" className="nuevoArchivo">
        <template v-slot:activator="{ on }">
          <v-btn color="#00898c" dark class="mb-2" v-on="on">Subir Archivo</v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                 <div class="container">
                    <div class="large-12 medium-12 small-12 cell">
                    <label>File
                        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                    </label>
                        <button v-on:click="submitFile()">Submit</button>
                    </div>
                </div>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="archivosProp"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nombreArchivo }}</td>
        <td class="text-xs-left">{{ props.item.tipoArchivo }}</td>
        <td class="text-xs-left">{{ props.item.fechaArchivo }}</td>
      
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
          >
            assignment
          </v-icon>
          
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            download
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
      </template>
    </v-data-table>
  </div>
</template>

<script>

import Axios from 'axios';
const axios = require('axios');
export default {
    //nombre de la propuesta, datos de la propuesta, y cliente asociado
    props: ['archivosProp'],
    
    data: () => ({
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: [],
      search: null,
      dialog: false,
      headers: [
        {
          text: 'Nombre del Archivo',
          align: 'left',
          sortable: false,
          value: 'nombreArchivo'
        },
        { text: 'Tipo', value: 'tipoArchivo' },
        { text: 'Fecha de Subida', value: 'fecha' },
        { text: 'Actions', value: 'nombreArchivo', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        nombreArchivo: 'asd',
        tipoArchivo: 'asd',
        fechaArchivo: 'asd',
      },
      defaultItem: {
        nombreArchivo: '',
        tipoArchivo: '',
        fechaArchivo: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
    },

    methods: {
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
        console.log(this.file);
      },
      submitFile(){
         let formData = new FormData();

            /*
                Add the form data we need to submit
            */
          formData.append('file', this.file);
          console.log(formData);
        axios.post( 'http://localhost:9000/api/archivos/subir',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          },
         
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(error){
          console.log(error);
        });
      },

        editItem (item) {
          this.editedIndex = this.propuestas.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
      },
        nuevaPropuesta (item, accion){
          let json = JSON.stringify({
                idPropuesta: "0",
                nombrePropuesta: item.nombrePropuesta,
                cliente: item.cliente,
                fecha: item.fecha,
                estado: item.estado});
          console.log(json);
          axios.post('http://localhost:9000/api/main/'+accion, json)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log("error");
              console.log(error);
            });
      },

      deleteItem (item) {
        const index = this.propuestas.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.propuestas.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        console.log(this.propuestas);
        if (this.editedIndex > -1) {
          //Object.assign(this.propuestas[this.editedIndex], this.editedItem)
          //editar propuesta
          //this.nuevaPropuesta(this.editedItem, this.editedIndex);
        } else {
          //nueva propuesta
          this.nuevaPropuesta(this.editedItem, 'nuevaPropuesta');
          //this.propuestas.push(this.editedItem)
        }
        this.close()
      }
    }
  }

</script>

<style scoped>

.container{
    margin-left: 19.5% ;
    width: 80% !important;
}

.v-dialog__content{
   width: 95% !important;
   height: 400% !important;
}

</style>



<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title> {{"ADMINISTRACIÓN DE " + this.tipo}} </v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
        <v-text-field
        v-model="searcher"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="1100px" className="nuevaProp">
        <template v-slot:activator="{ on }">
          <v-btn color="#00898c" dark class="mb-2" v-on="on">Nueva Propuesta</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4 >
                  <v-text-field v-model="editedItem.nombrePropuesta" label="Nombre de propuesta"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <!-- <v-text-field v-model="editedItem.cliente" label="Cliente"></v-text-field>   -->
                    <v-combobox
                      v-model="editedItem.cliente"
                      :items="items"
                      :search-input.sync="search"
                      hide-selected
                      hint="Seleccione el Cliente asociado"
                      label="Elegir Cliente"
                      persistent-hint
                    />
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fecha" label="Fecha"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.estado" label="Estado"></v-text-field>
                </v-flex>
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
      </v-layout>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="propuestas"
      :search="searcher"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nombrePropuesta }}</td>
        <td class="text-xs-left">{{ props.item.cliente }}</td>
        <td class="text-xs-left">{{ props.item.fecha }}</td>
        <td class="text-xs-left">{{ props.item.estado }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="verDetalle(props.item)"
          >
            assignment
          </v-icon>
          
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
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
  const axios = require('axios');
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
  export default {

    props: ['tipo','propuestas','clientes'],
    
    data: () => ({
      items: [],
      model: [],
      search: null,
      dialog: false,
      searcher: '',
      headers: [
        {
          text: 'Nombre de Propuesta',
          align: 'left',
          sortable: false,
          value: 'nombrePropuesta'
        },
        { text: 'Cliente', value: 'cliente' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Estado', value: 'estado' },
        { text: 'Actions', value: 'nombrePropuesta', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        nombrePropuesta: 'asd',
        cliente: 'asd',
        fecha: 'asd',
        estado: 'asd',
      },
      defaultItem: {
        nombrePropuesta: '',
        cliente: '',
        fecha: '',
        estado: '',
      }
    }),

    computed: {
      formTitle () {
        if (this.items.length == 0){
          this.clientes.forEach(element => {
            this.items.push(element.nombreCliente);
          });
        }
        return this.editedIndex === -1 ? 'Nueva Propuesta' : 'Editar Propuesta'
        

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
                idCliente: this.items.indexOf(item.cliente)+1,
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
      },
      verDetalle (item) {
          let clienteProp = []; 
          console.log(this.clientes);
          for (let element of this.clientes) {
                if (element.nombreCliente == item.cliente){
                      clienteProp = element;
                      break;
                }            
            
          }
          this.$router.push({ name: 'detallePropuesta', params: {propuesta: item, cliente: clienteProp} });
      }
    }
  }
</script>


<style scoped>

.v-dialog__content{
   height: 700% !important;
}
</style>

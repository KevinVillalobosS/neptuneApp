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
      <v-dialog v-model="dialog" className="nuevaProp"  persistent max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn color="#00898c" dark class="mb-2" v-on="on">Nuevo Cliente</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4 >
                  <v-text-field v-model="editedItem.nombreCliente" label="Nombre de Cliente"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.rubroCliente" label="Rubro"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.emailCliente" label="Email"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                    <v-combobox @change="selected"
                        v-model="editedItem.evaluacionCliente"
                        :items= "[0,1,2,3,4,5]"
                        label="Evaluación"
                    ></v-combobox>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fonoCliente" label="fono"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.estadoCliente" label="estado"></v-text-field>
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
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="datos"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.nombreCliente }}</td>
        <td class="text-xs-left">{{ props.item.rubroCliente }}</td>
        <td class="text-xs-left">{{ props.item.cantidadPropuestas }}</td>
        <td class="text-xs-right">
            <div class="text-xs-center">
                <v-rating 
                    v-model="props.item.evaluacionCliente" 
                    readonly>
                </v-rating>
            </div>
        </td>
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

    props: ['tipo','datos', 'nota'],

    data: () => ({
        select: '0',
        dialog: false,
        headers: [
        {
          text: 'Nombre del Cliente',
          align: 'left',
          sortable: false,
          value: 'nombreCliente'
        },
        { text: 'Rubro', value: 'rubro' },
        { text: 'Cantidad de Propuestas', value: 'cantidadPropuestas' },
        { text: 'Evaluación', value: 'evaluacionCliente' },
        { text: 'Acciones', value: 'nombreCliente', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        idCliente: '0',
        nombreCliente: 'nombre',
        rubroCliente: 'rubro',
        evaluacionCliente: '0',
        emailCliente: 'email',
        fonoCliente: '569 11223344',
        estadoCliente: 'activo',
      },
      defaultItem: {
        idCliente: '',
        nombreCliente: '',
        rubroCliente: '',
        evaluacionCliente: '',
        emailCliente: '',
        fonoCliente: '',
        estadoCliente: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Cliente' : 'Editar Cliente'
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
      selected: function () {
         this.nota = this.select;
       },

        editItem (item) {
          this.editedIndex = this.datos.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
      },
        enviarPropuesta (item, idCliente, accion){
          let json = JSON.stringify({
                idCliente: idCliente,
                nombreCliente: item.nombreCliente,
                rubroCliente: item.rubroCliente,
                evaluacionCliente: item.evaluacionCliente,
                emailCliente: item.emailCliente,
                fonoCliente: item.fonoCliente,
                estadoCliente: item.estadoCliente});
          console.log(json);
          axios.post('http://localhost:9000/api/clientes/'+accion, json)
            .then(function (response) {
              
              this.nota = 0;
            })
            .catch(function (error) {
              console.log("error");
              console.log(error);
            });
      },

      deleteItem (item) {
        const index = this.datos.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.datos.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          //Object.assign(this.datos[this.editedIndex], this.editedItem)
          //editar propuesta
          this.enviarPropuesta(this.editedItem, this.editedItem.idCliente, "editarCliente");
        } else {
          //nueva propuesta
          this.enviarPropuesta(this.editedItem, "0", 'nuevoCliente');
          //this.datos.push(this.editedItem)
        }
        this.close()
      },
      verDetalle (cliente) {
          this.$router.push({ name: 'detalleCliente', params: {cliente: cliente} });
      }
    }
  }
</script>


<style scoped>

.v-dialog__content{
  margin-top: 1px !important;
   max-width: 90% !important;
   height: 800% !important;
}

</style>



     
<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
const axios = require('axios');

  export default {
    data(){
      return {
        file: ''
      }
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
      }
    }
  }
</script>

<style scoped>

.container{
    margin-left: 19.5% ;
    width: 80% !important;
}

</style>



<template>
    <div class="logIn">
        <form>
            <v-text-field
            v-model="nombre"
            label="Nombre"
            required
            ></v-text-field>
            <v-text-field
            v-model="apellido"
            label="Apellido"
            required
            ></v-text-field>
            <v-text-field
            v-model="rol"
            label="Rol"
            required
            ></v-text-field>
            <v-btn @click="submit">Ingresar</v-btn>
        </form>
    </div>
</template>

<script>

  export default {

    data: () => ({
      nombre: '',
      apellido: '',
      rol: '',
    }),


    methods: {
      submit () {
          this.$router.push({ name: 'dashboard' });
      },
    
    }
  }
</script>


<style scoped>
.logIn{
    max-width: 70% !important;
    padding-left: 30%;
    padding-top: 10%;
}
</style>

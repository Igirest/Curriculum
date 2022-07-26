<template>
   <div class="datospersonales">
      <h1>DATOS PERSONALES</h1>
      {{ store.datosPersonales.nombre }} {{ store.datosPersonales.apellido1 }} {{ store.datosPersonales.apellido2 }} <br>
      {{ store.datosPersonales.fechanacimiento }}
      
   </div>
      <h1>CURSOS</h1>
      
      <h1>ESTUDIOS</h1>
     
      <h1>EXPERIENCIA LABORAL</h1>
      
</template>

<script setup >

import { useStorePerfil } from '@/store/index'
import { ref } from 'vue';


const store = useStorePerfil();
const errores = ref({ error: false, message: '' });


store.setDatosPersonales()
   .catch(e => {
      errores.value = {
         error: true,
         message: e.message
      }
   });

store.setDatoscurriculum();
// store.setEstudios();

</script>

<style>
li {
   list-style: none;
}

</style>
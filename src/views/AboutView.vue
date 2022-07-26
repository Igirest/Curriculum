<template>
  <div class="container">
    <h1>EXPERIENCIA MILAGROSA</h1>
  </div>
  <h2>{{ store.estudios.milagro1 }}</h2>
  <p>{{ store.estudios.milagro1a }}</p>
  <h2>{{ store.estudios.milagro2 }}</h2>
  <p>{{ store.estudios.milagro2a }}</p>
  <h2>{{ store.estudios.milagro3 }}</h2>
  <p>{{ store.estudios.milagro3a }}</p>

  

</template>


<script setup >

import { useStorePerfil } from '@/store/index'
import { ref } from 'vue';

const store = useStorePerfil();
const errores = ref({ error: false, message: '' });


store.setEstudios()
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
p {
  padding:5px 700px 40px 700px; 
  align-items: center;
  display: flex;
  height:fit-content;
  justify-content:center;
  text-align: center; 
  width:auto; 
  color: #333;
}
</style>


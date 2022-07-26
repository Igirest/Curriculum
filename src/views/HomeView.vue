
<template>
   <div class="datospersonales">
      <h1>DATOS PERSONALES</h1>
      <img src="./jesus1.png" alt="#">
      <br> {{ store.datosPersonales.nombre }} {{ store.datosPersonales.apellido1 }}  {{ store.datosPersonales.apellido2 }}
      <br> {{ store.datosPersonales.pesudonimo }}
      <br> {{ store.datosPersonales.fechanacimiento }} 
   </div>

   <div class="acercademin">
    <h2>SOBRE MI:</h2>
    <p class=".acerca">[2] Abrahán engendró a Isaac; Isaac engendró a Jacob; Jacob engendró a Judá y a sus hermanos. [3] Judá engendró, de Tamar, a Fares y Zará; Fares engendró a Esrón; Esrón engendró a Arán. [4] Arán engendró a Aminadab; Aminadab engendró a Naasón; Naasón engendró a Salmón. [5] Salmón engendró, de Rajab, a Booz; Booz engendró, de Rut, a Obed; Obed engendró a Jesé. [6] Jesé engendró al rey David. David engendró, de la mujer de Urías, a Salomón. [7] Salomón engendró a Roboán; Roboán engendró a Abías; Abías engendró a Asaf. [8] Asaf engendró a Josafat; Josafat engendró a Jorán; Jorán engendró a Ozías. [9] Ozías engendró a Joatán; Joatán engendró a Acaz; Acaz engendró a Ezequías. [10] Ezequías engendró a Manasés; Manasés engendró a Amón; Amón engendró a Josías. [11] Josías engendró a Jeconías y a sus hermanos, cuando la deportación a Babilonia. [12] Después de la deportación a Babilonia, Jeconías engendró a Salatiel; Salatiel engendró a Zorobabel. [13] Zorobabel engendró a Abiud; Abiud engendró a Eliacín; Eliacín engendró a Azor. [14] Azor engendró a Sadoc; Sadoc engendró a Aquín; Aquín engendró a Eliud. [15] Eliud engendró a Eleazar; Eleazar engendró a Matán; Matán engendró a Jacob. [16] Jacob engendró a José, esposo de María, de la que nació Jesús, llamado el Mesías. [17]</p>
   </div>
  
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



p {
  padding:20px 700px 40px 700px; 
  align-items: center;
  display: flex;
  height: fit-content;
  width: fit-content;
  text-align: justify;
 
  
  
  color: #333;
}

img{
   position:absolute; 
    top: 70px;
    left: 45px;
    width: 250px;
    height: 250px;
    border-radius: 20%;
    border:2px solid #fff;
    display: block;
}
</style>
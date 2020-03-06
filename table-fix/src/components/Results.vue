<template>
  <div id="app">
      <h2 v-if="!usuario">Nenhum usuario selecionado.</h2>
      <div v-else> 
        <h5>Id: {{usuario.id}}</h5>
        <h5>Nome: {{usuario.nome}}</h5>
        <h5>Idade: {{usuario.idade}}</h5>
      </div>
  </div>
</template>

<script>

import barramento from '@/barramento'
export default {
 data(){
     return{
         usuario:null
     }
 },
 created(){
     barramento.onUserSel(e =>{
         this.usuario = e
     })
 }
}
</script>

<style>
    div{
        display: flex;
        padding: 10px;
        font: 18px arial;
        flex-direction: column;
    }
</style>
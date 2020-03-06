<template>
  <div id="app">
      <table>
          <thead>
              <th>Id</th>
              <th>Nome</th>
          </thead>
          <tbody>
              <tr v-for="user in usuarios" :key="user.id" @click="userClick(user)">
                  <td>{{user.id}}</td>
                  <td>{{user.nome}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        usuarios:Array
    },
    methods:{
        userClick(e){
            barramento.setUserSel(e)
            this.usuarios.pop()
       
        }
    }
}
</script>

<style>

</style>
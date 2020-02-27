<template>
    <div id="contadores">
        <h2>Contadores</h2>
        <app-contador />
         <app-mudar />
         <app-alertar />
    </div>
</template>

<script>
import  Contador from './Contador.vue'
import MudarTexto from './MudarTexto.vue'

export default {
  
   components:{
       'app-contador':Contador,
       'app-mudar': MudarTexto,
      
   }
    
}
</script>

<style>

</style>
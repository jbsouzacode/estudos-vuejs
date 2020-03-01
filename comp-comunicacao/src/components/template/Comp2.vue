<template>
 <div class="comp2">
    <p>Nome: {{invert()}}</p>
 </div>
</template>
<script>
export default {
    props:{
       nome:{
           type: String,
           //require: true
           default: 'Anônimo'
       }
    },
    
    methods:{
        invert(){
           return this.nome.split('').reverse('').join('')
      }
    }
}
</script>

<style>
    .comp2{
        border: 1px solid #ccc;
    }
</style>
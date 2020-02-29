<template>
  <div id="app">
      <comp1 />
  </div>
</template>

<script>

import Comp1 from '@/components/template/Comp1.vue'
export default {
   components:{
     'comp1' : Comp1
   }
}
</script>

<style>
#app{
  display: flex;
  border: 1px solid #069;
  padding: 0.2em;
  justify-content: space-between
}
</style>

<template>
  <div id="app">
      <Table :usuarios="usuarios"/>
      <Results />
  </div>
</template>

<script>
import Table from '@/components/Table'
import Results from '@/components/Results'
export default {
    data(){
      return{
        usuarios:[
          {id:1, nome:'Jarbas Bento', idade:42},
          {id:2, nome:'Renata Melo', idade:42},
          
        ]
      }
    },
    components:{
       Table, Results
    }
}
</script>

<style>

</style>

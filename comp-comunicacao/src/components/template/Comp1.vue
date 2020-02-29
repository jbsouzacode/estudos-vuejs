<template>
    <div class="comp1">
        
            <p>Nome a mudar:</p>
            <input type="radio" id="marcos" name="gender" @click="changeV" value="Marcos">
            <label for="male">Marcos</label><br>
            <input type="radio" id="pedro" name="gender" @click="changeVb" value="Pedro">
            <label for="female">Pedro</label><hr>
            <button @click="alterarNome" v-show="b" >Alterar Nome</button>
             <button v-show="{b : !b}" disabled>Alterar Nome</button>
         
        <comp2 :nome="nome" />
    </div>

</template>
<script>
import Comp2 from '@/components/template/Comp2.vue'
export default {
   data(){
       return{
           b:null,
           n:true,
           nome:"Pedro Braga"
       }
   },

   components:{
      'comp2' : Comp2
   },
    methods:{
      alterarNome(){
         if(this.n == false){
             this.nome = 'Pedro'
            
            
         }else if(this.n == true){
             this.nome = 'Marcos'
         }
            
         
      },
      changeV(){
          this.n = true
           console.log(this.n)
      },
      changeVb(){
          this.n = false
           console.log(this.n)
      }
   },
   watch:{
       n(){
           this.b = true
       }
   }
}
</script>

<style>
    .comp1{
        border: 1px solid #ccc;
    }
</style>
<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Idade: <strong>{{idade}}</strong> <strong class="str">  Event Bus</strong></p>
  
        <button @click="mudarNome()">Editar nome</button>
    </div>
</template>

<script>
import router from '@/router'
export default {
    props:{
        nome:{
            type:String,
            default:'Anônimo'
        },
         idade:{
            type:Number,
            default:0
        },

        editarFn:Function
    },

    methods:{
        mudarNome(){
            
            this.idade +=1
            router.$emit('newIdade', this.idade)
        }
    },
    
    components:{
        
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98a5b9;
        color: #fff;
    }
    .str{
        color: slateblue
    }
     button{
         border:0;
         cursor:pointer
    }
    button:hover{
        background-color: dimgrey;
        color: white;
       
    }
</style> 
<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome: <strong>{{nome}}</strong> <strong class="str"> Via Props</strong></p>
         <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="mudarNome">Alterar nome</button>
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
        }
    },
    methods:{
        mudarNome(){
            this.nome = 'Jarbas'
            this.$emit('nomeNovo', this.nome)
        }
    },
    created(){
        router.$on('newIdade', idade =>{
            this.idade = idade 
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
     .str{
        color: gold
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

<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome: <strong>{{nome}}</strong></p>
       <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" @nomeNovo="nome = $event" />
            
            <app-usuario-editar :nome="nome" :editarFn = "editarNome"/>
            <user :nome="nome"/>
        </div> 
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'
import User from './User'


export default {
    components: { AppUsuarioInfo, AppUsuarioEditar, User },
    data(){
        return{
            nome:'Pedro',
            idade:30
           
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Ana Luíza'
        },

        editarNome(){
            this.nome = 'Roberta'
        }
    },
     
   
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
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

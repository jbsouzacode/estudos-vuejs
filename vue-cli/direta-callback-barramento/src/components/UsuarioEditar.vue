<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Nome: <strong>{{nome}}</strong> <strong class="str">  Callback</strong></p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="editarFn()">Editar nome</button>
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
     .str{
        color: rgb(255, 0, 0)
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

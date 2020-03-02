<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2> 
        <p>Nome: <strong>{{nome}}</strong></p>
        <button @click="criarEvento">Mudar nome</button>
        <button @click="cn">Mudar nome - (CallBack)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        nome:{
            type:String,
            default:'Anônimo'
           
        },

        cn:Function
    },
    methods:{
        criarEvento(){
            this.nome = 'Marcelo'
            this.$emit('mudarNome', this.nome)
            this.clear = true
        }
    },
    created(){
        barramento.$on('mudarNomeB', nome =>{
            this.nome = nome
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
</style>

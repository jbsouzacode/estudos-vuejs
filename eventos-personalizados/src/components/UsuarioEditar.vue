<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Nome: <strong>{{nome}}</strong></p>
        <button @click="mudar">Mudar nome</button>
  
    </div>
</template>

<script>
export default {
    props:{
        nome:{
            type:String,
            default:'Anônimo'
        },

        clear:{
            type:Boolean
        }
    },
    methods:{
        mudar(){
            this.nome = 'Jarbas'
            this.clear = true
            this.$emit('mudarNomeB', this.nome)
            this.$emit('clear', this.clear)
        }
    }
   
   
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>

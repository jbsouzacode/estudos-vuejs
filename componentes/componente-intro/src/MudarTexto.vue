<template>
    <div class="mudar-txt">
        <p>{{valor}}</p>
        <input type="text" @keyup="change" :value="valor"><button @click="limpar">Limpar</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            valor:'teste'
        }
    },
    methods:{
        change(event){
            this.valor = event.target.value
        },
        limpar(){
            this.valor = ''
        }
    }
    
}
</script>

<style>
.mudar-txt{
    width: 350px;
    height: 100px;
    background-color: aqua;
    padding:10px;
    margin-top:10px;
}

</style>
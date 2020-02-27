<template>
    <div idiv class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="retirar">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contador:0
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },

        retirar(){
            this.contador--
        }
    }
}
</script>

<style>
    .contador span{
        border-bottom: 1px solid #ccc;
        height: 300px;
        padding: 5px 25px;
    }

    .contador button{
        height:30px;
        width:30px;
        border-radius:15px;
        background-color: coral;
        color: white;
        margin-left: 10px;
        border:none;
        cursor:pointer;
        outline: none


    }

</style>
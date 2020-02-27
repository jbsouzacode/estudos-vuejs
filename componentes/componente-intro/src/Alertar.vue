<template>
    <div class="ms">
        <input type="text" @keyup="sugestao">
        <button @click="alertar">ALERTAR</button>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'Olá'
        }
    },

    methods:{
        sugestao(event){
            return this.msg = event.target.value
            
           
        },
        alertar(){
           return alert(this.msg)
        }
    }
}
</script>
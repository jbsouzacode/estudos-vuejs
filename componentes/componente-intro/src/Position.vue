<template>
    <div class="pos">
        <h2>Mouse Position</h2>
        <span @mousemove="getXY">Pos X:{{x}} - Pos Y:{{y}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            x:0,
            y:0
        }
    },
    methods:{
        getXY(event){
            this.x = event.clientX
            this.y = event.clientY
        }
    }
}
</script>

<style>
    .pos span{
       padding: 50px;
        border:1px dotted #ccc;
        cursor: pointer
    }
</style>
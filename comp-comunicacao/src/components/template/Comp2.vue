<template>
 <div class="comp2">
    <p>Nome: {{nome}}</p>
 </div>
</template>
<script>
export default {
    props:['nome']
}
</script>

<style>
    .comp2{
        border: 1px solid #ccc;
    }
</style>
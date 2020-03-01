<template>
	<div id="app">
		<app-usuario />
	</div>
</template>

<script>
import AppUsuario from "./components/Usuario.vue";

export default {
	
	components: {'app-usuario' : AppUsuario }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.7rem;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

button {
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 4px;
	margin: 10px;
	border: 0;
	cursor: pointer;
}
button:hover{
	background-color: rgb(6, 52, 105);
	color:#fff
}
</style>

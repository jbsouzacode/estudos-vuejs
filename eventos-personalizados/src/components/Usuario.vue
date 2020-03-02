<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Nome : <strong>{{nome}}</strong></p>
        <button @click="mudarNome">Mudar nome</button>
      
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" @mudarNome="nome = $event" :cn="alterarNome"/>
            <app-usuario-editar :nome="nome" /><!--@mudarNomeB="nome = $event"  @clear="clear = $event"-->
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
           nome:'Pedro',
           clear:null
        }
    },

  
    methods:{
      mudarNome(){
          this.nome = 'Ana Bela'
          
      },
      alterarNome(){
          this.nome = 'Irineu'
         
      }
    },
    watch:{
        nome(){
             this.clear = true
           if(this.clear == true){
               this.clear = null
                var time = setInterval(()=>{
                this.nome = 'Pedro'
              
                clearInterval(time);
            }, 2000)
           }
            
        }
    }
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
</style>

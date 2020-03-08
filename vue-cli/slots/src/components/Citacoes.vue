

<template>
  <div id="app" class="citacao">
        <Citacao>
                <p>{{citacoes[i].autor}}</p>
                <p>{{citacoes[i].texto}}</p>
                <p>{{citacoes[i].fonte}}</p>
               
        </Citacao>
         <p>Número: {{numero}} - índice: {{i}}</p>
       
        <button @click="numero--">&#9754;  </button>
         <button @click="numero++"> &#9755; </button>
  </div>
</template>

<script>

import Citacao from './Citacao.vue'
export default {
    
    data(){
        return{
            numero:0,
            cont:0,
            citacoes:[
                {
                    autor:'Albert Einstein',
                    texto:'Uma vez a mente expandida, ela jamais volta ao seu tamanho original',
                    fonte:'Internet'
                },
                 {
                    autor:'Chico Xavier',
                    texto:'A luz sempre será a sua melhor companheira',
                    fonte:'Livros de Chico'
                },
                 {
                    autor:'Povo',
                    texto:'Água mole em pedra dura, tanto bate até que fura',
                    fonte:'Ditado popular'
                }
            ]
        }
    },
 
  components: {
      Citacao
  },
  computed:{
      i(){
          return Math.abs(this.numero % 3)
      }
  }
}
</script>

<style>
    button{
        border-radius: 100%;
        font-size: 25px;
        border:0;
        background-color: darkgreen;
        color: #fff;
        margin: 10px;
        cursor: pointer;
    }
    .citacao {
        font:16px Arial #000
    }
</style>
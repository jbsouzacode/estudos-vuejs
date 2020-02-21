new Vue({
    el:'#desafio',
    data:{
        nome :'Jarbas Bento',
        idade : 42,
        linkImg : 'https://get.pxhere.com/photo/animal-wildlife-zoo-mammal-monkey-fauna-primate-gorilla-chimpanzee-face-ape-vertebrate-western-gorilla-great-ape-common-chimpanzee-135502.jpg',
        nameValue : 'Jarbas Bento',
        hgt:200
    },

    methods:{
        multIdade: function(){
            return this.idade * 3
        },
        rand: function(){
            return Math.random()
        }
    }
    
})
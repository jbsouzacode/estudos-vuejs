new Vue({
    el:'#app',
    data:{
        x:0,
        y:0,
        title:'Teste de propriedades reativas'

    },
    methods:{
        getXY(event){
             this.x = event.clientX
             this.y = event.clientY
        },

    }
})
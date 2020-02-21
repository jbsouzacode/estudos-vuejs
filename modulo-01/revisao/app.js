new Vue({
    
    el:'#app', 
    data:{
        x:0,
        htmlLink:'<a href="http://www.google.com" target="blank">Google</a>',
        tg:'blank',
        site:'UOL',
        url:'http://www.uol.com.br',
        y:0,
        z:0
    },

    methods:{
        refreshField(event){
            this.x = event.target.value
        },
        changeValue(event){
            return this.y = event.target.value
        },
        changeValue2(event){
            return this.z = event.target.value
        },
        getXY(event){
            this.y = event.clientX
            this.z = event.clientY
        }
    },
    computed:{
       msg(){
           return this.x == 45 ? 'Opa, numero 45 digitado' : ''
       }
    }
})
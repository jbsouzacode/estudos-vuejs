new Vue({
    el: '#desafio02',
    data: {
        valor: '',
        valor2: '',
        initValue:'',
        alertEnter:'',
      
    },
    methods:{
        pressionado(){
            alert('Botão clicado')
        },

        press(event){
            this.valor = event.target.value
            this.clear = 'Clear'
         
        },

        press2(event){

            this.valor2 = 'Valor digitado: ' + event.target.value
            this.initValue = ''
   
        },
        alrt(event){
            this.alertEnter = "Enter"
        },
      
    }
})
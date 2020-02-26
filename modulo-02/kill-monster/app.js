let tm = 1000
let lf = 0

new Vue({
    el:'#app',
    data:{
        
        running:false,
        playerLife:100,
        monsterLife:100, 
        specialAttack:4,
        pk:Math.floor(Math.random() * 99),
        curar:8,
        def:false,
        numDef:2,
        logs:[]
    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife =100
            this.monsterLife = 100
            this.logs = []
            this.specialAttack = 4
            this.curar = 8
            this.def = false
        },
        attack(especial){
            this.hurt('monsterLife',5, 10, especial, 'jogador', 'monster', 'player')
            if(this.monsterLife > 0){
                this.hurt('playerLife', 7, 12, false, 'monster', 'jogador', 'monster')
            }
            lf = 2
            
        },

      
        hurt(prop, min, max, especial, source, target, cls){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu o ${target} com ${hurt}`, cls)

        },

        healAndHurt(){
            this.heal(10, 17)
            this.hurt('playerLife', 5, 11, false,'monstro', 'jogador', 'monstro')
            this.curar-=1
            setTimeout(()=>{
                this.hurt('playerLife', 1, 4, false, 'monstro', 'jogador', 'monstro')
            },1000)
        },

        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`O jogador ganhou forÃ§a de ${heal}`, 'player')
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        attackPika(){
            this.playerLife -= 15
          let damageMonster = setInterval(() => {
                    this.monsterLife -=1
                    if(this.monsterLife == 32){
                        clearInterval(damageMonster)
                    }
                    if( this.monsterLife == 0){
                        clearInterval(damageMonster)
                    }
          }, 20);
          
          
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        }
       
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 | this.monsterLife == 0
        }
    },
    watch:{
        hasResult(value){
            if(value) this.running = false
        },
    },
    
    watch:{
        
        monsterLife(){
           setInterval(()=>{
              if(this.monsterLife > 0) {
                  this.monsterLife+=lf
                  lf = 0;
              }  
           },tm)
        },

        playerLife(){
            if(this.def == true){
                this.playerLife+=8
                this.def = false
                this.numDef-=1
            }
                
        },
       
    },
  
   
})
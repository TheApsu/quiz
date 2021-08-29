'use strict'

class StartQuiz{
    constructor(){
        this.start()
        this.select();
        this.next()
    }
    start(){
        this.quest = document.querySelectorAll('.quest');
        this.load = document.querySelector('.load');
        this.loadBar = 10;
        this.meet = 0;
        this.err = 0;
        this.objData = {
            id1: this.quest[0].id,
            id2: this.quest[1].id,
            id3: this.quest[2].id,
            id4: this.quest[3].id,
        }
    }
    select(){
        for(let i = 0; i < this.quest.length; i ++){
            this.quest[i].addEventListener('click', () => {
                for(let cl of this.quest){
                   if(cl.classList.contains('selected')){
                        cl.classList.remove('selected')
                        cl.children[0].classList.replace('selectedText','spanColor')
                   }
                }
                this.quest[i].classList.add('selected')
                this.quest[i].children[0].classList.replace('spanColor','selectedText')
                
            });
        }
    }
    next(){
        this.next = document.getElementById('next');
        this.next.addEventListener('click', () => {
            for(let cl of this.quest){
                     
                if(cl.classList.contains('selected')){                    
                    if(cl.id != 1) {
                        if(this.loadBar <= 100){
                            this.load.style.width = `${this.loadBar}%`;
                            this.load.style.background = '#F33';
                            this.err += 10;
                            return this.loadBar += 10;
                        }                     
                    }else{
                        if(this.loadBar <= 100){
                            this.load.style.width = `${this.loadBar}%`;
                            this.load.style.background = '#2af';
                            this.meet += 10;
                            if(this.loadBar == 100){
                                return document.querySelector('.modal').style.display = 'block'
                            }
                            return this.loadBar += 10;
                            
                        }                
                    };  
                    console.log(this.loadBar)
                };
            };     
            return alert('Debes escoger una opción!')          
        });
    };
};

const newGame = new StartQuiz()

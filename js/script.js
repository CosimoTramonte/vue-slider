
const { createApp } = Vue;


createApp({

    data(){
        return{
            counter: 0,
            image: [
                "img/01.webp",
                "img/02.webp",
                "img/03.webp",
                "img/04.webp",
                "img/05.webp"
            ],
            time: null,
            hover: false
        }  
    },

    methods:{

        changeImg(next){
            if(next) this.counter++
            else this.counter--

            this.conditionCounter()
        },

        clickChange(index){
            this.counter = index 
        },

        autoChange(){
            this.time = setInterval(() => {
                this.counter++
                
                this.conditionCounter()               
            }, 3000);
        },

        over(){
            this.hover = !this.hover

            if(this.hover){
                clearInterval(this.time)
            }
        },

        out(){
            this.hover = !this.hover
            this.autoChange()
        },

        conditionCounter(){
            if(this.counter > this.image.length - 1) this.counter = 0;
            else if(this.counter < 0) this.counter = this.image.length - 1
        }

    },

    mounted(){
        this.autoChange();
    }


}).mount("#app")

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
        }  
    },

    methods:{

        changeImg(next){
            if(next) this.counter++
            else this.counter--

            if(this.counter > this.image.length - 1) this.counter = 0;
            else if(this.counter < 0) this.counter = this.image.length - 1
        }
    }

}).mount("#app")
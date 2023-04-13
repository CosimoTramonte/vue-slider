
const { createApp } = Vue;


createApp({

    data(){
        return{
            counter: 5,
            image: [
                "img/01.webp",
                "img/02.webp",
                "img/03.webp",
                "img/04.webp",
                "img/05.webp"
            ],
        }
    }

}).mount("#app")
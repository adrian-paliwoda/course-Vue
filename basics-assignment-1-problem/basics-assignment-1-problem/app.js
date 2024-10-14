const app = Vue.createApp({
    data() {
        return{
            name: "Adrian",
            age: 29,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1280px-Vue.js_Logo_2.svg.png"
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },

        getFavouriteNumber(){
            return Math.random();
        }
    }

});



app.mount("#assignment")
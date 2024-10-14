const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isHidden: false,
            color: ''
        }
    },

    computed: {
        paragraphClass(){
            return{
                visible: !this.isHidden,
                hidden: this.isHidden,
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2'
            }
        },

    },

    methods: {
        onVisibleClick(){
            this.isHidden = !this.isHidden;
        },

        onColorInput(event){
            this.color = event.target.value;
        },
    }
});


app.mount('#assignment')
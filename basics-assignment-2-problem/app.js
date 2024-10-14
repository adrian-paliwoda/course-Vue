const app = Vue.createApp(
    {
        data() {
            return {
                outputOnKeyDown : '',
                outputConfirmed : ''
            }
        },

        methods: {
            onClick () {
                alert('You clicked the button')
            },
            onInputKey(event) {
                this.outputOnKeyDown = event.target.value;
            },
            onConfirm(event){
                this.outputConfirmed = event.target.value;
            }
        }
    }
)


app.mount('#assignment')
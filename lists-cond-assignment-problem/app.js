const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            currentTask: '',
            isHidden: false
        };
    },
    methods: {
        onCreateTask(){
            if (this.currentTask !== '') {
                this.tasks.push(this.currentTask);
                this.currentTask = '';
            }
        },
        toggleList(){
            this.isHidden = !this.isHidden;
        }

    },
    computed:{
        ulClasses(){
            return {
                hidden: this.isHidden,
                visible: !this.isHidden
            }
        },
        caption(){
            if (this.isHidden) {
                return "Show List";
            }
            return "Hide List"
        }
    }
});


app.mount('#assignment');
const app = Vue.createApp({
    data() {
        return {
            goals: [
                'Finish this course!'
            ],
            currentGoal: ''
        };
    },
    methods:
        {
            onSubmitNewGoal(){
                if (this.currentGoal !== '') {
                    this.goals.push(this.currentGoal);
                }

                this.currentGoal = '';
            },
            removeGoal(index) {
                this.goals.splice(index, 1);
            },
        }
});

app.mount('#user-goals');

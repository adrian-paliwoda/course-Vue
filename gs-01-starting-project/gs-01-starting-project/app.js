Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal () {
          this.goals.push(this.enteredValue);

          this.enteredValue = '';
        }
    },
}).mount('#app');



const withoutVue = () => {
    const buttonEl = document.querySelector('button');
    const inputEl = document.querySelector('input');
    const listEl = document.querySelector('ul');


    const addGoal = () => {
        const inputGoal = inputEl.value;

        const li = document.createElement('li');
        li.textContent = inputGoal;

        listEl.appendChild(li);
        inputEl.value = '';
    }

    buttonEl.addEventListener('click', addGoal)
}

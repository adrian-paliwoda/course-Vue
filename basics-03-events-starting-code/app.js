const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: 'Wpisz imię',
      confirmedName : ''
    };
  },
  methods: {
    onAdd (number)
    {
      this.counter += number;
    },
    onReduce (number){
      this.counter -= number;
    },
    onInput (event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },

    submitForm(event){
      event.preventDefault();
      alert('submitted')
    },

    onSubmit(){
      alert('submitted')
    },
    onEnterInput(event) {
      this.confirmedName = event.target.value;
    }
  }
});

app.mount('#events');

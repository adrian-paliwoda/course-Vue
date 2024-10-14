const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',

    };
  },
  computed:{
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }

      return this.name + ' ' + this.lastName;
    }

  },
  watch:{
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() =>{
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   this.fullname = value + ' ' + this.lastName;
    // },
    //
    // lastName(value) {
    //   this.fullname = this.name + ' ' + value;
    // },
  },
  methods: {
    outputFullname(){
      if (this.name === '') {
        return '';
      }

      return this.name + ' ' + 'Pawel';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
    },
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted() {
    console.log('mount');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount(){
    console.log('beforeUnmount');
  },
  unmounted(){
    console.log('unmounted')
  }
});

app.mount('#app');
//app.unmount();

const app2 = Vue.createApp({
  template: `
  <p>{{ favourMeal }}</p>
  `,
  data(){
    return{
    favourMeal: 'pizza'
    }
  }
});

app2.mount('#app2')

const data = {
  message: 'info1',
  longMessage: 'Hello! World!',
}

const handler = {
  set(target, key, value){
    if (key === 'message') {
      target.longMessage = value + ' World!'
    }

    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'haha';

console.log(proxy.longMessage);
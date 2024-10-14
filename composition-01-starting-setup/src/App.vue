<template>
  <section class="container">
<!-- <user-data :age="user.age" :firstName="firstName" :lastName="lastName"></user-data> -->
<user-data></user-data>


    <h2>{{ user.name }}</h2>
    <h2>{{ user.age}}</h2>
    <h2>{{ userName}}</h2>
    <h2>{{ userRefs.name}}</h2>
    <h2>{{ userRefs.age}}</h2>
    
    <h2>{{ uName }}</h2>

    <button @click="changeAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" v-model="lastName" /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName"> Set Last Name</button>
    </div>
  </section>
</template>

<!-- <script setup>
import {ref, reactive, isReactive, isRef, toRefs, computed, watch} from "vue";

const userName = ref('Adrian');
const user = reactive({name: 'Maximilian',age: 30});

console.log(isReactive(userName));
console.log(isReactive(user));
console.log(isRef(userName));
console.log(isRef(user));

const userRefs = toRefs(user);
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref('');

function setLastName() {
  lastName.value = lastNameInput.value.value;
}

setTimeout(function () {
  user.name = 'Adrian';
  user.age = 31;
}, 2000);


const uName = computed(function () {
  return firstName.value + " " + lastName.value;
});


function changeAge(){
  user.age = 35;
}

watch([user.age, uName], function(newvalue, oldValue){
console.log('Old age: ' + oldValue[0] + ' new age: ' + newvalue[0]);
console.log('Old name: ' + oldValue[1] + ' new name: ' + newvalue[1]);
});

// function setFirstName(event){
//   firstName.value = event.target.value;
// }

// function setLastName(event){
//   lastName.value = event.target.value;
// }
</script> -->

<script>
import {ref, reactive, isReactive, isRef, toRefs, computed, watch, provide} from "vue";
import UserData from "./components/UserData.vue";

export default {
  provide: ['age', 'firstName', 'lastName'],
  components: {
    UserData
  },

  setup(){
      const userName = ref('Adrian');
      const user = reactive({name: 'Maximilian',age: 30});

      console.log(isReactive(userName));
      console.log(isReactive(user));
      console.log(isRef(userName));
      console.log(isRef(user));

      const userRefs = toRefs(user);
      const firstName = ref('');
      const lastName = ref('');
      const lastNameInput = ref('');

      function setLastName() {
        lastName.value = lastNameInput.value.value;
      }

      setTimeout(function () {
        user.name = 'Adrian';
        user.age = 31;
      }, 2000);


      const uName = computed(function () {
        return firstName.value + " " + lastName.value;
      });


      function changeAge(){
        user.age = 35;
      }

      watch([user.age, uName], function(newvalue, oldValue){
      console.log('Old age: ' + oldValue[0] + ' new age: ' + newvalue[0]);
      console.log('Old name: ' + oldValue[1] + ' new name: ' + newvalue[1]);
      });

      provide('age', user.age);
      provide('firstName', firstName);
      provide('lastName', lastName);

      // function setFirstName(event){
      //   firstName.value = event.target.value;
      // }

      // function setLastName(event){
      //   lastName.value = event.target.value;
      // }


    return {
      user, changeAge, uName, setLastName, firstName, lastName, lastNameInput, userName, userRefs
    }
  }
}


</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{goal}}</h3>
  <h3 v-if="isVisible2">{{goal2}}</h3>
  <h3 v-if="goalData.isVisible">{{goalData.goal}}</h3>
  <h3 v-if="userGoal.isVisible">{{userGoal.goal}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <button @click="toggleGoal1">Toggle Goal</button>
  <button @click="toggleGoal3">Toggle Goal</button>
  <button @click="toggleGoal3">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import {reactive, ref} from "vue";

export default {
  data() {
    return {
      goal: "My first app",
      isVisible: false
    }
  },
  methods: {
    toggleGoal(){
      this.isVisible = !this.isVisible;
    }
  },
  setup(){
    const goal2 = ref('My second app');
    let isVisible2 = ref(false);

    const goalData = ref({isVisible: false, goal: "My object ref goel"});

    function toggleGoal1(){
      goalData.value.isVisible = !goalData.value.isVisible;
    }

    function toggleGoal2(){
      isVisible2.value = !isVisible2.value;
    }
    
    function toggleGoal3(){
      userGoal.isVisible = !userGoal.isVisible;
    }    
    
    const userGoal = reactive({isVisible: false, goal: "My third goal"});
    
    return {goalData, userGoal, goal2, isVisible2, toggleGoal1, toggleGoal2, toggleGoal3}    ;
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
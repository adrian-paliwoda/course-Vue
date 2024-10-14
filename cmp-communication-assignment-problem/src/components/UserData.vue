<template>
<form @submit.prevent="createUser">
  <div>
    <label for="username">UserName</label>
    <input type="text" id="username" v-model="username" placeholder="Your name"/>
  </div>
  <div>
    <label for="age">Age</label>
    <input type="text" id="age" v-model="age" placeholder="Your age"/>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
</template>

<script>
export default {
  emits: ['add-user'],
  data() {
    return {
      username: '',
      age: ''
    }
  },
  methods:{
    createUser(){
      const user = {
        userName: this.username,
        age: +this.age
      }

      this.$emit('add-user', user);
    }
  }

}

</script>

<style>

</style>
<template>
  <active-user :username="userName" :age="age"></active-user>
  <user-data @addUser="createUser"></user-data>
</template>

<script>
export default{
  data() {
    return {
      userName: '',
      age: '',
    }
  },
  methods:{
    createUser(user) {
    this.userName = user.userName;
    this.age = user.age;
    },
  }
}
</script>

<style>

</style>
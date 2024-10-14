<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  date() {
    return{
      changesSave: false
    }
  },
  methods: {
    confirmInput()
    {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSave = true;
    }
  },
  provide() {
    return {
      users: this.users,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log('Users list component before route enter');
    next();
  },
  beforeRouteLeave: function(to, from, next) {
    console.log("Test" + this.changesSave)
    if (this.changesSave) {
      next();
    } else {
      const userWantsToLeave = confirm("Are you sure? You got unsaved changes!")
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
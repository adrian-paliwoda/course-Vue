<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-if="isLoggedIn">Logout</button>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout'])
  }
}
</script>

<style scoped>

</style>
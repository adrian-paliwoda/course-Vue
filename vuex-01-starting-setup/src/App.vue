<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <counter></counter>
    <favourite-value></favourite-value>
    <button @click="increment">Add 1</button>
    <change-counter>Add 1</change-counter>
    <button @click="increase({value: 10})">Add 10</button>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from "@/components/Counter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavouriteValue from "@/components/FavouriteValue.vue";
import UserAuth from "@/components/UserAuth.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    FavouriteValue,
    ChangeCounter,
    Counter,
    BaseContainer,
    UserAuth
  },
  methods: {
    ...mapActions('numbers', ['increase', 'increment'])
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  }
};
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
</style>
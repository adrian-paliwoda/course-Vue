<template>
  <button @click="increment">Add 1</button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch("increment");
    // }
    ...mapActions('numbers', ['increment'])
  }
  
}

</script>


<style scoped>

</style>
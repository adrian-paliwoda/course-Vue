<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul :style="{visibility: this.detailsAreVisible ? 'visible' : 'hidden'}">
      <li><strong>Phone:</strong>{{ friend.phone}}</li>
      <li><strong>Email:</strong>{{ friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["friend"],
  data(){
    return{
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
};
</script>



<style scoped>

</style>
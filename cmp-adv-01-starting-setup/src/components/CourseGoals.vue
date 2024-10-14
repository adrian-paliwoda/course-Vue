<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn vue']
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="goal in this.goals" :key="goal">
      <slot v-bind:goal="goal"></slot>

    </li>
  </ul>
</template>

<style scoped>

</style>
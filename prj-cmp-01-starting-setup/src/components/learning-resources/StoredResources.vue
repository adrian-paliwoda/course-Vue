<template>
  <ul>
    <learning-resource v-for='res in resources'
                       :key='res.id'
                       :id="res.id"
                       :description='res.description'
                       :link='res.link'
                       :title='res.title'>
      
    </learning-resource>
  </ul>
</template>

<script setup>
import LearningResource from "./LearningResource.vue";
</script>

<script>
export default {
  inject: ['resources'],
}

</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
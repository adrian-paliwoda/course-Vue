
<template>
<div>
  <label>Title</label>
  <input v-model='title' type='text' />

  <label>Description</label>
  <input v-model='description' type='text' />

  <label>Link</label>
  <input v-model='link' type='text' />

  <button @click='addResource'>Add Resources</button>

</div>
</template>

<script>
export default {
  emits: ['newResource', 'error'],
  data() {
    return {
      title: '',
      link: '',
      description: ''
    }
  },
  methods: {
    addResource() {
      if (this.title === '') {
        this.$emit('error', "Title cannot be empty");
      }
      else{
        this.$emit('newResource', {title: this.title, description:this.description, link: this.link });
      }
    }
  }
}
</script>


<style scoped>

</style>
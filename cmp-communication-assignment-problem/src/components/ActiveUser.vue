<template>
  <div>
    <h1>Active User</h1>
    <h2>{{username}}</h2>
    <h3>{{age}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    'username':
        {
          type: String,
          required: true
        },
    'age':
        {
          type: Number,
          required: true
        }},
  data() {
    return {
    }
  },
  methods:{

  }

}

</script>

<style>

</style>
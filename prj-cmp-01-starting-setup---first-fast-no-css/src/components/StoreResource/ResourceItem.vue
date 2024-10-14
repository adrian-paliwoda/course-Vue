<template>
<div>
  <h1>{{resource.title}}</h1>
  <h4>{{resource.description}}</h4>
  <p>{{resource.link}}</p>
</div>
</template>
<script>
export default {
  props: ['resource']
}
</script>

<style scoped>

</style>
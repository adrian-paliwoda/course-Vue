<script>
export default {
  emits: ['closeError'],
  methods: {
    onClickOk(){
      this.$emit('closeError')
    }
  }
}

</script>

<template>
<div>
  <h1>Error</h1>
  <slot></slot>
  <button @click='onClickOk'>Ok</button>
</div>

</template>

<style scoped>

</style>
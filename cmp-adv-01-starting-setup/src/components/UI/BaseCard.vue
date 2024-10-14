<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>The default</h2>
      </slot>
    </header>
    <slot name="section"></slot>
  </div>
</template>


<script>
export default {
  mounted() {
    console.log(this.$slots.header);
  }
}
</script>


<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

div header {
  margin: 0.5rem 0;
  color: #3a3a3a;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
<template>
  <div>
    <button  :class='{"active-button": this.storeResourcesActive}' @click="setActive('storedResources')">Stored Resources</button>
    <button :class='{"active-button": !this.storeResourcesActive}' @click="setActive('addResources')">Add Resources</button>
  </div>
</template>

<script>

export default {
  emits: ['activePage'],
  data() {
    return {
        storeResourcesActive: true,
    }
  },
  methods : {
    setActive(activatedComponent) {
      this.storeResourcesActive = !this.storeResourcesActive;
      this.$emit('activePage', activatedComponent);
    }
  }
}

</script>

<style>
div {

}

div button {
  margin: 3em;
  min-width: 20em;
  min-height: 5em;
}

.active-button {
  background-color: darkred;
}

</style>
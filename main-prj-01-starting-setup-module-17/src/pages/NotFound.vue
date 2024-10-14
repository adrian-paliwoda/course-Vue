<template>
  <div>
    <section>
      <base-card>
        <h2>Page not found</h2>
        <p>This page could be found = maybe check out all our <router-link to="/coaches">coaches</router-link></p>
      </base-card>
    </section>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default defineComponent({
  components: {BaseCard}
})
</script>

<style scoped>

</style>
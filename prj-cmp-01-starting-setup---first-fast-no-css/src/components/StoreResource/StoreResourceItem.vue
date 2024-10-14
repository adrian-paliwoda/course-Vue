<template>
  <div>
    <resource-item v-for='item in resourceItems' :resource='item' :key='item'></resource-item>
  </div>
</template>
<script>

import ResourceItem from '@/components/StoreResource/ResourceItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { ResourceItem },
  props: ['resourceItems']
});

</script>

<style scoped>

</style>
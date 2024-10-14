<template>
  <base-card>
    <base-button
        @click="setSelectedTab('stored-resources')"
    :mode="storeResourcesMode">
      Stored Resources
    </base-button>
    
    <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResourceMode">
      Add Resource
    </base-button>
  
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>

import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
  components: {StoredResources, AddResource},
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide', title: 'Official Guide', description: 'The official Vue js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'Duckduckgo', title: 'Search engine', description: 'Search everything',
          link: 'https://duckduckgo.com/'
        }
      ]

    }
  },
  computed: {
    storeResourcesMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat' ;
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }        
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };      
      
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId){
      const index = this.storedResources.findIndex(res => res.id === resId);

      this.storedResources.splice(index, 1);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  }
}
</script>
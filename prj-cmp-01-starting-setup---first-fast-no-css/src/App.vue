<template>
  <Header></Header>
  <Navigation @active-page='onActivated'></Navigation>
  <keep-alive>
    <add-resource v-if='addResourcesActive' @newResource='onAddNewResource' @error='onError' ></add-resource>
  </keep-alive>
  <store-resource-item v-if='!this.addResourcesActive' :resourceItems="resourcesItems"></store-resource-item>

  <teleport to='#app'>
  <error-alert v-if='errorMessage !== ""' @close-error='onCloseError'>
    <p>{{errorMessage}}</p>
  </error-alert>
  </teleport>
</template>

<script>
import AddResource from '@/components/StoreResource/AddResource.vue';
import StoreResourceItem from '@/components/StoreResource/StoreResourceItem.vue';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import ErrorAlert from '@/components/error/ErrorAlert.vue';


export default {
  components: { ErrorAlert, Navigation, Header, StoreResourceItem, AddResource },
  data(){
    return {
      resourcesItems: [{title: "Vue", description: "Description", link: "https://vue.org"}],
      addResourcesActive: false,
      errorMessage: ''
    }
  },
  computed:
    {
      displayErrorMessage(){
        return false;
      }
    },
  methods: {
    onActivated(activatedComponent){
      this.addResourcesActive = activatedComponent === 'addResources';
    },
    onAddNewResource(resource) {
      this.resourcesItems.push(resource)
    },
    onError(message) {
        this.errorMessage = message;
        this.displayErrorMessage = true;
    },
    onCloseError() {
      this.errorMessage = '';
      this.displayErrorMessage = false;
    }

  }
}

</script>


<style scoped>

</style>
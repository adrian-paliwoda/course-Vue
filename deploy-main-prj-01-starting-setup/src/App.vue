<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition mode="out-in" name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import {useRouter} from "vue-router";

export default {
  components: {
    TheHeader
  },
  data(){
    return {
      router: useRouter()
    };
  },
  computed: {
    didLogout(){
      return this.$store.getters.autoLogout;
    }
  },
  watch: {
    didLogout(curValue, oldValue){
      if (curValue && oldValue !== curValue){
        this.router.replace('/coaches');
      }
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-to
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}


.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;

}
</style>
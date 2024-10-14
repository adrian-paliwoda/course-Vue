<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component">
        
      </component>
    </transition>
  </router-view>
  
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div :class="{animate: animatedBlock}" class="block"></div>
    <button @click="animate">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave" @before-leave="beforeLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">Only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in" @before-enter="beforeEnterUser" @enter="enterToUser" >
      <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>  
    </transition>
  </div>
  <base-modal :open="dialogIsVisible" @close="hideDialog">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from "@/components/ListData.vue";

export default {
  components: {ListData},
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animate() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnterUser(el){
      console.log('before enter to ' + el);
    },
    enterToUser(el) {
      console.log(el);
    },
    beforeEnter(el){
      el.style.opacity = 0;
      
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      } , 20)
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval( () => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      } , 20)
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    enterCancelled(){
      clearInterval(this.leaveInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  //transition: transform 0.3s ease-out;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-scale 0.3s ease-out forwards;
  /* transform: translateX(-150px); */
}



.modal-enter-from {
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-enter-to {

}

.modal-leave-from {

}

.modal-leave-active {
  animation: modal 0.3s ease-in;
}

.modal-leave-to {

}

.fade-button-enter-from {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to {
  opacity: 1;
}

.fade-button-leave-from {
  opacity: 1;
}

.fade-button-leave-active {
  animation: opacity 0.3s ease-in;
}

.fade-button-leave-to {
  opacity: 0;
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9)
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
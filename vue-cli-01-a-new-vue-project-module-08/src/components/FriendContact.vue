<template>
  <li>
    <h2>{{friendTitle}}</h2>
    <button @click="toggleDetails">{{buttonText}}</button>
    <button @click="toggleFavorite(friend.id)">Toggle Favorite</button>
    <button @click="removeFriend(friend.id)">Delete</button>
    <ul :style="listStyle">
      <li><strong>Phone:</strong>{{ friend.phone}}</li>
      <li><strong>Email:</strong>{{ friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["friend", "isFavorite"],
  props: {
    friend: {
      // name: {type: String, require: true},
      // phone: String,
      // email: {type: String, require: true},
      // isFavourite: {
      //   type: String, require: false, default: '0',
      //   validator: function (value){
      //     return value === '1' || value === '0';
      //   }
      // },
      validator: function (value) {
        return value.isFavorite === '1' || value.Favorite === '0';

      }
    }
  },
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true;
      }
      console.warn("Id is not exists")
      return false;
    },
    'remove-friend': function (id) {
      return !!id;
    },
  },
  data(){
    return{
      detailsAreVisible: false,
    }
  },
  computed: {
    listStyle() {
      return {visibility: this.detailsAreVisible ? 'visible' : 'hidden'};
    },
    buttonText(){
      return this.detailsAreVisible ? "Hide Details" : "Show Details";
    },
    friendTitle() {
      if (this.friend.isFavorite !== undefined && this.friend.isFavorite === true) {
        return this.friend.name + " (Favourite)"
      }
      return this.friend.name;
    },

  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite(id) {
      this.$emit('toggle-favorite', id);
      this.isFavorite = !this.isFavorite;
    },
    removeFriend(id) {
      this.$emit('remove-friend', id);
    }
  }
};
</script>



<style scoped>

</style>